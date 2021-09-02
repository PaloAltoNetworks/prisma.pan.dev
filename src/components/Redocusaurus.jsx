import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import React from "react";
import merge from "lodash.merge";
import useThemeContext from "@theme/hooks/useThemeContext";


let RedocStandalone = () => <div></div>;
let MenuStore = () => <div></div>;
if (ExecutionEnvironment.canUseDOM) {
  RedocStandalone = require("redoc").RedocStandalone;
  MenuStore = require('redoc').MenuStore;
  MenuStore.prototype.subscribe = function() {
    this._unsubscribe = this.history.subscribe(this.updateOnHistory);
    this._hashUnsubscribe = this.history.subscribe(this.updateOnHistory);
  };

}

/**
 * NOTE: Colors taken from `node_modules/infima/styles/common/dark-mode.css`
 * and related files
 */
const DOCUSAURUS = {
  fontFamily: "var(--ifm-font-family-base)",
  fontSize: "var(--ifm-font-size-base)",
  dark: {
    primaryText: "#f5f6f7", // var(--ifm-font-color-base)
    secondaryText: "#00c0e8", // var(--ifm-font-color-secondary)
    backgroundColor: "#121212",
  }
};

/** @type {Partial<import("redoc").ResolvedThemeInterface>} */
let LIGHT_THEME_OPTIONS = {
  typography: {
    fontFamily: DOCUSAURUS.fontFamily,
    fontSize: DOCUSAURUS.fontSize,
    headings: {
      fontFamily: DOCUSAURUS.fontFamily,
      fontSize: DOCUSAURUS.fontSize,
    },
  },
  sidebar: {
    backgroundColor: "#fff",
  },
  rightPanel: {
    backgroundColor: "transparent",
  }
};

/**
 * @type {Partial<import("redoc").ResolvedThemeInterface>}
 */
let DARK_THEME_OPTIONS = {
  colors: {
    text: {
      primary: DOCUSAURUS.dark.primaryText,
      secondary: DOCUSAURUS.dark.secondaryText,
    },
  },
  schema: {
    nestedBackground: DOCUSAURUS.dark.backgroundColor,
    typeNameColor: DOCUSAURUS.dark.secondaryText,
    typeTitleColor: DOCUSAURUS.dark.secondaryText,
  },
  sidebar: {
    backgroundColor: DOCUSAURUS.dark.backgroundColor,
    textColor: DOCUSAURUS.dark.primaryText,
    arrow: {
      color: DOCUSAURUS.dark.primaryText,
    },
  },
};


/**
 * @returns {import("redoc").ResolvedThemeInterface}
 */
function getThemeOptions(isDarkMode) {
  let baseTheme = {
    spacing: {unit: '2'},
    colors: {
      primary: {
        main: "#00c0e8"
      },
      success: {
        main: "#00c0e8"
      },
      error: {
        main: "#fa383e"
      },
      info: {
        main: "#54c7ec"
      },
      warning: {
        main: "#ffba00"
      },
      http: {
        get: ({ colors }) => (colors.info.main),
        post: ({ colors }) => (colors.warning.main),
        put: ({ colors }) => (colors.warning.main),
        options: ({ colors }) => (colors.info.main),
        patch: ({ colors }) => (colors.warning.main),
        delete: ({ colors }) => (colors.error.main),
        basic: ({ colors }) => (colors.primary.main),
        link: ({ colors }) => (colors.primary.main),
        head: ({ colors }) => (colors.primary.main),
      },
    },
    sidebar: {
      width: "0px",
      arrow: {
        size: '0'
      }
    },
    typography: {
      fontSize: "var(--ifm-font-size-base)",
      lineHeight: "var(--ifm-line-height-base)",
      fontFamily: "var(--ifm-font-family-base)",
      headings: {
          fontFamily: "var(--ifm-font-family-base)",
          fontWeight: "var(--ifm-heading-font-weight)"
      },
      code: {
          lineHeight: "var(--ifm-pre-line-height)",
          fontFamily: "var(--ifm-font-family-monospace)"
      }
    }

  };
  baseTheme = merge(baseTheme, LIGHT_THEME_OPTIONS);

  if (!isDarkMode) return baseTheme;

  return merge({}, baseTheme, DARK_THEME_OPTIONS);
}


/**
 *
 * @param {{
 *  spec: string
 * }} props
 */
function Redocusaurus(props) {
  const { isDarkTheme } = useThemeContext();
  const theme = getThemeOptions(isDarkTheme);

  return (
    <div className="redocusaurus">
      <RedocStandalone
        specUrl={props.spec}
        options={{
          scrollYOffset: ".navbar",
          theme,
          hideDownloadButton: true,
          nativeScrollbars: false,
          disableSearch: true,
          hideSchemaPattern: false,
          pathInMiddlePanel: true,
          suppressWarnings: true,
          showExtensions: true,
          hideLoading: true,
          jsonSampleExpandLevel: 1,
          simpleOneOfTypeLabel: false,
        }}
      />
    </div>
  );
}
export default Redocusaurus;