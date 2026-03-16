"use strict";
(self["webpackChunksportsbook"] = self["webpackChunksportsbook"] || []).push([["app_sportsbook-page_tsx-webpack_sharing_consume_default_react_react"],{

/***/ "../../packages/ui/src/components/BetSlip/BetSlip.styles.ts"
/*!******************************************************************!*\
  !*** ../../packages/ui/src/components/BetSlip/BetSlip.styles.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   containerStyle: () => (/* binding */ containerStyle),
/* harmony export */   ctaSectionStyle: () => (/* binding */ ctaSectionStyle),
/* harmony export */   emptyDescStyle: () => (/* binding */ emptyDescStyle),
/* harmony export */   emptyIconStyle: () => (/* binding */ emptyIconStyle),
/* harmony export */   emptyStateStyle: () => (/* binding */ emptyStateStyle),
/* harmony export */   emptyTitleStyle: () => (/* binding */ emptyTitleStyle),
/* harmony export */   eventNameStyle: () => (/* binding */ eventNameStyle),
/* harmony export */   getCtaButtonStyle: () => (/* binding */ getCtaButtonStyle),
/* harmony export */   getTabStyle: () => (/* binding */ getTabStyle),
/* harmony export */   headerStyle: () => (/* binding */ headerStyle),
/* harmony export */   headerTitleStyle: () => (/* binding */ headerTitleStyle),
/* harmony export */   marketNameStyle: () => (/* binding */ marketNameStyle),
/* harmony export */   oddsAlertStyle: () => (/* binding */ oddsAlertStyle),
/* harmony export */   oddsValueStyle: () => (/* binding */ oddsValueStyle),
/* harmony export */   quickStakeButtonStyle: () => (/* binding */ quickStakeButtonStyle),
/* harmony export */   quickStakeRowStyle: () => (/* binding */ quickStakeRowStyle),
/* harmony export */   removeButtonStyle: () => (/* binding */ removeButtonStyle),
/* harmony export */   returnLabelStyle: () => (/* binding */ returnLabelStyle),
/* harmony export */   returnSectionStyle: () => (/* binding */ returnSectionStyle),
/* harmony export */   returnValueStyle: () => (/* binding */ returnValueStyle),
/* harmony export */   sectionStyle: () => (/* binding */ sectionStyle),
/* harmony export */   selectionFooterRowStyle: () => (/* binding */ selectionFooterRowStyle),
/* harmony export */   selectionHeaderRowStyle: () => (/* binding */ selectionHeaderRowStyle),
/* harmony export */   selectionItemStyle: () => (/* binding */ selectionItemStyle),
/* harmony export */   selectionNameStyle: () => (/* binding */ selectionNameStyle),
/* harmony export */   stakeInputStyle: () => (/* binding */ stakeInputStyle),
/* harmony export */   stakeLabelStyle: () => (/* binding */ stakeLabelStyle),
/* harmony export */   tabGroupStyle: () => (/* binding */ tabGroupStyle)
/* harmony export */ });
// ---------------------------------------------------------------------------
// Container
// ---------------------------------------------------------------------------

var containerStyle = {
  background: 'var(--color-background-card)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--layout-border-radius)',
  fontFamily: 'var(--font-family)',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '300px',
  maxWidth: '400px',
  overflow: 'hidden'
};

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

var headerStyle = {
  background: 'var(--color-surface)',
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid var(--color-border)'
};
var headerTitleStyle = {
  color: 'var(--color-text)',
  fontWeight: 700,
  fontSize: '1rem',
  fontFamily: 'var(--font-family)'
};
var tabGroupStyle = {
  display: 'flex',
  gap: '4px'
};
function getTabStyle(active) {
  if (active) {
    return {
      background: 'var(--color-primary)',
      color: '#fff',
      // sole permitted hardcode — white text on primary background
      border: 'none',
      borderRadius: 'var(--layout-border-radius)',
      padding: '4px 10px',
      fontSize: '0.75rem',
      fontWeight: 600,
      fontFamily: 'var(--font-family)',
      cursor: 'pointer'
    };
  }
  return {
    background: 'transparent',
    color: 'var(--color-text-muted)',
    border: 'none',
    borderRadius: 'var(--layout-border-radius)',
    padding: '4px 10px',
    fontSize: '0.75rem',
    fontWeight: 600,
    fontFamily: 'var(--font-family)',
    cursor: 'pointer'
  };
}

// ---------------------------------------------------------------------------
// Selection item
// ---------------------------------------------------------------------------

var selectionItemStyle = {
  padding: '12px 16px',
  borderBottom: '1px solid var(--color-border)',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
};
var selectionHeaderRowStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '8px'
};
var eventNameStyle = {
  color: 'var(--color-text)',
  fontWeight: 600,
  fontSize: '0.875rem',
  fontFamily: 'var(--font-family)',
  flex: 1
};
var removeButtonStyle = {
  background: 'transparent',
  border: 'none',
  color: 'var(--color-text-muted)',
  cursor: 'pointer',
  fontSize: '1rem',
  lineHeight: 1,
  padding: '0',
  flexShrink: 0
};
var marketNameStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)'
};
var selectionFooterRowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};
var selectionNameStyle = {
  color: 'var(--color-text)',
  fontSize: '0.875rem',
  fontFamily: 'var(--font-family)'
};
var oddsValueStyle = {
  color: 'var(--color-primary)',
  fontWeight: 700,
  fontFamily: 'var(--font-family-mono)',
  fontSize: '1rem'
};
var oddsAlertStyle = {
  color: 'var(--color-warning)',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)'
};

// ---------------------------------------------------------------------------
// Stake section
// ---------------------------------------------------------------------------

var sectionStyle = {
  padding: '12px 16px',
  borderBottom: '1px solid var(--color-border)',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
};
var stakeLabelStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)',
  textTransform: 'uppercase',
  letterSpacing: '0.04em'
};
var stakeInputStyle = {
  border: '1px solid var(--color-border)',
  background: 'var(--color-surface)',
  color: 'var(--color-text)',
  borderRadius: 'var(--layout-border-radius)',
  padding: '8px 12px',
  fontSize: '0.875rem',
  fontFamily: 'var(--font-family)',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none'
};
var quickStakeRowStyle = {
  display: 'flex',
  gap: '6px',
  flexWrap: 'wrap'
};
var quickStakeButtonStyle = {
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  color: 'var(--color-text-muted)',
  borderRadius: 'var(--layout-border-radius)',
  padding: '4px 10px',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)',
  cursor: 'pointer'
};

// ---------------------------------------------------------------------------
// Return section
// ---------------------------------------------------------------------------

var returnSectionStyle = {
  padding: '12px 16px',
  borderBottom: '1px solid var(--color-border)',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
};
var returnLabelStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)',
  textTransform: 'uppercase',
  letterSpacing: '0.04em'
};
var returnValueStyle = {
  color: 'var(--color-success)',
  fontWeight: 700,
  fontFamily: 'var(--font-family-mono)',
  fontSize: '1.125rem'
};

// ---------------------------------------------------------------------------
// CTA button
// ---------------------------------------------------------------------------

var ctaSectionStyle = {
  padding: '12px 16px'
};
function getCtaButtonStyle(disabled) {
  return {
    background: 'var(--color-primary)',
    color: '#fff',
    // sole permitted hardcode — white text on primary background
    border: 'none',
    borderRadius: 'var(--layout-border-radius)',
    width: '100%',
    padding: '14px',
    fontWeight: 700,
    fontSize: '0.875rem',
    fontFamily: 'var(--font-family)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.7 : 1,
    letterSpacing: '0.06em',
    textTransform: 'uppercase'
  };
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

var emptyStateStyle = {
  padding: '48px 24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  textAlign: 'center'
};
var emptyIconStyle = {
  fontSize: '2.5rem',
  lineHeight: 1
};
var emptyTitleStyle = {
  color: 'var(--color-text)',
  fontWeight: 600,
  fontSize: '0.875rem',
  fontFamily: 'var(--font-family)',
  marginTop: '4px'
};
var emptyDescStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.8125rem',
  fontFamily: 'var(--font-family)',
  lineHeight: 1.5
};

/***/ },

/***/ "../../packages/ui/src/components/BetSlip/BetSlip.tsx"
/*!************************************************************!*\
  !*** ../../packages/ui/src/components/BetSlip/BetSlip.tsx ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BetSlip: () => (/* binding */ BetSlip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?f277");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BetSlip.styles */ "../../packages/ui/src/components/BetSlip/BetSlip.styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");



// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

var QUICK_STAKE_VALUES = [10, 20, 50, 100];
var MAX_STAKE = 500;

// ---------------------------------------------------------------------------
// Calculation helpers
// ---------------------------------------------------------------------------

function calculateReturn(stake, selections, mode) {
  if (selections.length === 0 || stake <= 0) return 0;
  if (mode === 'single') {
    var first = selections[0];
    if (!first) return 0;
    return stake * first.odds;
  }
  var combinedOdds = selections.reduce((acc, s) => acc * s.odds, 1);
  return stake * combinedOdds;
}
function formatBRL(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function SelectionItem(_ref) {
  var {
    selection,
    onRemove
  } = _ref;
  var {
    id,
    eventName,
    marketName,
    selectionName,
    odds,
    oddsChanged
  } = selection;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.selectionItemStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.selectionHeaderRowStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.eventNameStyle,
        children: eventName
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        type: "button",
        style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.removeButtonStyle,
        onClick: () => onRemove(id),
        "aria-label": "Remover ".concat(selectionName),
        children: "\u2715"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.marketNameStyle,
      children: marketName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.selectionFooterRowStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.selectionNameStyle,
        children: selectionName
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.oddsValueStyle,
        children: odds.toFixed(2)
      })]
    }), oddsChanged && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
      style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.oddsAlertStyle,
      children: [oddsChanged === 'up' ? '▲' : '▼', " Odd alterada: odds", ' ', oddsChanged === 'up' ? 'subiu' : 'caiu']
    })]
  });
}

// ---------------------------------------------------------------------------
// BetSlip component
// ---------------------------------------------------------------------------

function BetSlip(_ref2) {
  var {
    selections,
    onRemoveSelection,
    onStakeChange,
    onPlaceBet,
    stake = 0,
    isLoading = false,
    mode = 'single',
    onModeChange
  } = _ref2;
  var isEmpty = selections.length === 0;
  var isCtaDisabled = isLoading || isEmpty;
  var potentialReturn = calculateReturn(stake, selections, mode);
  function handleStakeInputChange(e) {
    var value = parseFloat(e.target.value);
    onStakeChange(isNaN(value) ? 0 : value);
  }
  function handlePlaceBet() {
    if (!isCtaDisabled) {
      onPlaceBet();
    }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.containerStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.headerStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.headerTitleStyle,
        children: "Aposta"
      }), !isEmpty && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.tabGroupStyle,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          style: (0,_BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.getTabStyle)(mode === 'single'),
          onClick: () => onModeChange === null || onModeChange === void 0 ? void 0 : onModeChange('single'),
          children: "Single"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          style: (0,_BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.getTabStyle)(mode === 'multiple'),
          onClick: () => onModeChange === null || onModeChange === void 0 ? void 0 : onModeChange('multiple'),
          children: "Multi"
        })]
      })]
    }), isEmpty ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.emptyStateStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.emptyIconStyle,
        children: "\uD83C\uDFAF"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.emptyTitleStyle,
        children: "Nenhuma sele\xE7\xE3o"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.emptyDescStyle,
        children: "Clique em uma odd para adicionar ao carrinho"
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [selections.map(selection => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SelectionItem, {
        selection: selection,
        onRemove: onRemoveSelection
      }, selection.id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.sectionStyle,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.stakeLabelStyle,
          children: "Valor:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "number",
          min: "0",
          step: "0.01",
          value: stake === 0 ? '' : stake,
          onChange: handleStakeInputChange,
          placeholder: "R$ 0,00",
          style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.stakeInputStyle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.quickStakeRowStyle,
          children: [QUICK_STAKE_VALUES.map(value => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.quickStakeButtonStyle,
            onClick: () => onStakeChange(value),
            children: value
          }, value)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.quickStakeButtonStyle,
            onClick: () => onStakeChange(MAX_STAKE),
            children: "Max"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.returnSectionStyle,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.returnLabelStyle,
          children: "Retorno potencial:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.returnValueStyle,
          children: formatBRL(potentialReturn)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: _BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.ctaSectionStyle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          style: (0,_BetSlip_styles__WEBPACK_IMPORTED_MODULE_1__.getCtaButtonStyle)(isCtaDisabled),
          onClick: handlePlaceBet,
          disabled: isCtaDisabled,
          children: isLoading ? 'PROCESSANDO...' : 'FAZER APOSTA'
        })
      })]
    })]
  });
}

/***/ },

/***/ "../../packages/ui/src/components/BetSlip/index.ts"
/*!*********************************************************!*\
  !*** ../../packages/ui/src/components/BetSlip/index.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BetSlip: () => (/* reexport safe */ _BetSlip__WEBPACK_IMPORTED_MODULE_0__.BetSlip)
/* harmony export */ });
/* harmony import */ var _BetSlip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BetSlip */ "../../packages/ui/src/components/BetSlip/BetSlip.tsx");


/***/ },

/***/ "../../packages/ui/src/components/LiveScoreboard/LiveScoreboard.styles.ts"
/*!********************************************************************************!*\
  !*** ../../packages/ui/src/components/LiveScoreboard/LiveScoreboard.styles.ts ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   awayTeamStyle: () => (/* binding */ awayTeamStyle),
/* harmony export */   containerStyle: () => (/* binding */ containerStyle),
/* harmony export */   lastUpdateStyle: () => (/* binding */ lastUpdateStyle),
/* harmony export */   minuteStyle: () => (/* binding */ minuteStyle),
/* harmony export */   periodStyle: () => (/* binding */ periodStyle),
/* harmony export */   scoreStyle: () => (/* binding */ scoreStyle),
/* harmony export */   teamLogoStyle: () => (/* binding */ teamLogoStyle),
/* harmony export */   teamNameStyle: () => (/* binding */ teamNameStyle),
/* harmony export */   teamStyle: () => (/* binding */ teamStyle),
/* harmony export */   teamsContainerStyle: () => (/* binding */ teamsContainerStyle),
/* harmony export */   timeContainerStyle: () => (/* binding */ timeContainerStyle)
/* harmony export */ });
// ---------------------------------------------------------------------------
// Container
// ---------------------------------------------------------------------------

var containerStyle = {
  background: 'var(--color-background-card)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--layout-border-radius)',
  padding: '16px',
  fontFamily: 'var(--font-family)',
  color: 'var(--color-text)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  minWidth: '280px'
};

// ---------------------------------------------------------------------------
// Teams row
// ---------------------------------------------------------------------------

var teamsContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: '16px'
};
var teamStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 600,
  fontSize: '1rem',
  flex: 1
};
var teamLogoStyle = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  objectFit: 'cover'
};
var teamNameStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: 'var(--color-text)'
};
var awayTeamStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 600,
  fontSize: '1rem',
  flex: 1,
  justifyContent: 'flex-end'
};

// ---------------------------------------------------------------------------
// Score
// ---------------------------------------------------------------------------

var scoreStyle = {
  fontFamily: 'var(--font-family-mono)',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: 'var(--color-primary)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

// ---------------------------------------------------------------------------
// Time / period
// ---------------------------------------------------------------------------

var timeContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px'
};
var minuteStyle = {
  fontFamily: 'var(--font-family-mono)',
  fontSize: '0.9rem',
  color: 'var(--color-text-muted)'
};
var periodStyle = {
  fontSize: '0.9rem',
  color: 'var(--color-text-muted)',
  fontWeight: 600,
  fontFamily: 'var(--font-family)'
};

// ---------------------------------------------------------------------------
// Last update
// ---------------------------------------------------------------------------

var lastUpdateStyle = {
  fontSize: '0.75rem',
  color: 'var(--color-text-muted)',
  fontFamily: 'var(--font-family)'
};

/***/ },

/***/ "../../packages/ui/src/components/LiveScoreboard/LiveScoreboard.tsx"
/*!**************************************************************************!*\
  !*** ../../packages/ui/src/components/LiveScoreboard/LiveScoreboard.tsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiveScoreboard: () => (/* binding */ LiveScoreboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?f277");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LiveScoreboard.styles */ "../../packages/ui/src/components/LiveScoreboard/LiveScoreboard.styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");



// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatTime(date) {
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}
function getPeriodText(period, minute) {
  if (period === 'HT') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.periodStyle,
      children: "INTERVALO"
    });
  }
  if (period === 'FT') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.periodStyle,
      children: "ENCERRADO"
    });
  }
  if (minute !== undefined && (period === '1H' || period === '2H')) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.timeContainerStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
        style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.minuteStyle,
        children: [minute, "'"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.periodStyle,
        children: period
      })]
    });
  }
  return null;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function TeamsRow(_ref) {
  var {
    homeTeam,
    awayTeam,
    score
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.teamsContainerStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.teamStyle,
      children: [homeTeam.logoUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: homeTeam.logoUrl,
        alt: homeTeam.name,
        style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.teamLogoStyle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.teamNameStyle,
        children: homeTeam.name
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.scoreStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        children: score.home
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        children: "-"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        children: score.away
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.awayTeamStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.teamNameStyle,
        children: awayTeam.name
      }), awayTeam.logoUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: awayTeam.logoUrl,
        alt: awayTeam.name,
        style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.teamLogoStyle
      })]
    })]
  });
}
function LastUpdateDisplay(_ref2) {
  var {
    lastUpdate
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.lastUpdateStyle,
    children: ["\xDAltima atualiza\xE7\xE3o: ", formatTime(lastUpdate)]
  });
}

// ---------------------------------------------------------------------------
// LiveScoreboard component
// ---------------------------------------------------------------------------

function LiveScoreboard(_ref3) {
  var {
    homeTeam,
    awayTeam,
    score,
    minute,
    period,
    lastUpdate
  } = _ref3;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: _LiveScoreboard_styles__WEBPACK_IMPORTED_MODULE_1__.containerStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TeamsRow, {
      homeTeam: homeTeam,
      awayTeam: awayTeam,
      score: score
    }), getPeriodText(period, minute), lastUpdate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LastUpdateDisplay, {
      lastUpdate: lastUpdate
    })]
  });
}

/***/ },

/***/ "../../packages/ui/src/components/LiveScoreboard/index.ts"
/*!****************************************************************!*\
  !*** ../../packages/ui/src/components/LiveScoreboard/index.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiveScoreboard: () => (/* reexport safe */ _LiveScoreboard__WEBPACK_IMPORTED_MODULE_0__.LiveScoreboard)
/* harmony export */ });
/* harmony import */ var _LiveScoreboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LiveScoreboard */ "../../packages/ui/src/components/LiveScoreboard/LiveScoreboard.tsx");


/***/ },

/***/ "../../packages/ui/src/components/MatchCard/MatchCard.styles.ts"
/*!**********************************************************************!*\
  !*** ../../packages/ui/src/components/MatchCard/MatchCard.styles.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCardStyle: () => (/* binding */ getCardStyle),
/* harmony export */   getTeamNameStyle: () => (/* binding */ getTeamNameStyle),
/* harmony export */   headerRowStyle: () => (/* binding */ headerRowStyle),
/* harmony export */   leagueStyle: () => (/* binding */ leagueStyle),
/* harmony export */   liveBadgeStyle: () => (/* binding */ liveBadgeStyle),
/* harmony export */   liveIndicatorGroupStyle: () => (/* binding */ liveIndicatorGroupStyle),
/* harmony export */   minuteStyle: () => (/* binding */ minuteStyle),
/* harmony export */   oddsRowStyle: () => (/* binding */ oddsRowStyle),
/* harmony export */   scoreStyle: () => (/* binding */ scoreStyle),
/* harmony export */   startTimeStyle: () => (/* binding */ startTimeStyle),
/* harmony export */   teamsRowStyle: () => (/* binding */ teamsRowStyle),
/* harmony export */   vsStyle: () => (/* binding */ vsStyle)
/* harmony export */ });
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ---------------------------------------------------------------------------
// Card container
// ---------------------------------------------------------------------------

function getCardStyle(variant) {
  var base = {
    background: 'var(--color-background-card)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--layout-border-radius)',
    fontFamily: 'var(--font-family)',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    minWidth: '280px'
  };
  if (variant === 'featured') {
    return _objectSpread(_objectSpread({}, base), {}, {
      background: 'linear-gradient(135deg, var(--color-surface), var(--color-background-card))',
      padding: '1.5rem'
    });
  }
  return base;
}

// ---------------------------------------------------------------------------
// Header row
// ---------------------------------------------------------------------------

var headerRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};
var leagueStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)',
  textTransform: 'uppercase',
  letterSpacing: '0.04em'
};
var liveBadgeStyle = {
  background: 'var(--color-error)',
  color: '#fff',
  // white text on error badge — sole permitted hardcode
  fontSize: '0.625rem',
  borderRadius: '4px',
  padding: '2px 6px',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase'
};
var minuteStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)'
};
var liveIndicatorGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px'
};

// ---------------------------------------------------------------------------
// Teams row
// ---------------------------------------------------------------------------

function getTeamNameStyle(variant) {
  return {
    color: 'var(--color-text)',
    fontWeight: 'bold',
    fontFamily: 'var(--font-family)',
    fontSize: variant === 'featured' ? '1.125rem' : '1rem'
  };
}
var scoreStyle = {
  color: 'var(--color-text)',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  fontFamily: 'var(--font-family-mono)',
  textAlign: 'center',
  minWidth: '80px'
};
var vsStyle = {
  color: 'var(--color-text-muted)',
  fontFamily: 'var(--font-family)',
  fontSize: '0.875rem',
  textAlign: 'center',
  minWidth: '40px'
};
var startTimeStyle = {
  color: 'var(--color-text-muted)',
  fontSize: '0.75rem',
  fontFamily: 'var(--font-family)',
  textAlign: 'center'
};
var teamsRowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

// ---------------------------------------------------------------------------
// Odds row
// ---------------------------------------------------------------------------

var oddsRowStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  flexWrap: 'wrap'
};

/***/ },

/***/ "../../packages/ui/src/components/MatchCard/MatchCard.tsx"
/*!****************************************************************!*\
  !*** ../../packages/ui/src/components/MatchCard/MatchCard.tsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchCard: () => (/* binding */ MatchCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?f277");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OddsButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OddsButton */ "../../packages/ui/src/components/OddsButton/index.ts");
/* harmony import */ var _MatchCard_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MatchCard.styles */ "../../packages/ui/src/components/MatchCard/MatchCard.styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");




// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function HeaderRow(_ref) {
  var {
    league,
    showLive,
    minute
  } = _ref;
  if (!league && !showLive) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    style: _MatchCard_styles__WEBPACK_IMPORTED_MODULE_2__.headerRowStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      style: _MatchCard_styles__WEBPACK_IMPORTED_MODULE_2__.leagueStyle,
      children: league !== null && league !== void 0 ? league : ''
    }), showLive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      style: _MatchCard_styles__WEBPACK_IMPORTED_MODULE_2__.liveIndicatorGroupStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        style: _MatchCard_styles__WEBPACK_IMPORTED_MODULE_2__.liveBadgeStyle,
        children: "AO VIVO"
      }), minute !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        style: _MatchCard_styles__WEBPACK_IMPORTED_MODULE_2__.minuteStyle,
        children: [minute, "'"]
      })]
    })]
  });
}
function TeamsRow(_ref2) {
  var {
    homeTeam,
    awayTeam,
    variant,
    score,
    startTime
  } = _ref2;
  var teamNameStyle = (0,_MatchCard_styles__WEBPACK_IMPORTED_MODULE_2__.getTeamNameStyle)(variant);
  var hasScore = score !== undefined;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      style: _MatchCard_styles__WEBPACK_IMPORTED_MODULE_2__.teamsRowStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        style: teamNameStyle,
        children: homeTeam
      }), hasScore ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        style: _MatchCard_styles__WEBPACK_IMPORTED_MODULE_2__.scoreStyle,
        children: [score.home, " \u2014 ", score.away]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        style: _MatchCard_styles__WEBPACK_IMPORTED_MODULE_2__.vsStyle,
        children: "vs"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        style: teamNameStyle,
        children: awayTeam
      })]
    }), !hasScore && startTime && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      style: _MatchCard_styles__WEBPACK_IMPORTED_MODULE_2__.startTimeStyle,
      children: startTime
    })]
  });
}
function OddsRow(_ref3) {
  var {
    odds,
    onOddsClick
  } = _ref3;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    style: _MatchCard_styles__WEBPACK_IMPORTED_MODULE_2__.oddsRowStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_OddsButton__WEBPACK_IMPORTED_MODULE_1__.OddsButton, {
      label: "Casa",
      odds: odds.home,
      state: "default",
      size: "sm",
      onClick: () => onOddsClick === null || onOddsClick === void 0 ? void 0 : onOddsClick('home')
    }), odds.draw !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_OddsButton__WEBPACK_IMPORTED_MODULE_1__.OddsButton, {
      label: "Empate",
      odds: odds.draw,
      state: "default",
      size: "sm",
      onClick: () => onOddsClick === null || onOddsClick === void 0 ? void 0 : onOddsClick('draw')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_OddsButton__WEBPACK_IMPORTED_MODULE_1__.OddsButton, {
      label: "Fora",
      odds: odds.away,
      state: "default",
      size: "sm",
      onClick: () => onOddsClick === null || onOddsClick === void 0 ? void 0 : onOddsClick('away')
    })]
  });
}

// ---------------------------------------------------------------------------
// MatchCard component
// ---------------------------------------------------------------------------

function MatchCard(_ref4) {
  var {
    homeTeam,
    awayTeam,
    league,
    startTime,
    variant = 'pre-match',
    isLive = false,
    score,
    minute,
    odds,
    onOddsClick
  } = _ref4;
  var showLive = isLive || variant === 'live';
  var cardStyle = (0,_MatchCard_styles__WEBPACK_IMPORTED_MODULE_2__.getCardStyle)(variant);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    style: cardStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(HeaderRow, {
      league: league,
      showLive: showLive,
      minute: minute
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(TeamsRow, {
      homeTeam: homeTeam,
      awayTeam: awayTeam,
      variant: variant,
      score: score,
      startTime: startTime
    }), odds !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(OddsRow, {
      odds: odds,
      onOddsClick: onOddsClick
    })]
  });
}

/***/ },

/***/ "../../packages/ui/src/components/MatchCard/index.ts"
/*!***********************************************************!*\
  !*** ../../packages/ui/src/components/MatchCard/index.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchCard: () => (/* reexport safe */ _MatchCard__WEBPACK_IMPORTED_MODULE_0__.MatchCard)
/* harmony export */ });
/* harmony import */ var _MatchCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatchCard */ "../../packages/ui/src/components/MatchCard/MatchCard.tsx");


/***/ },

/***/ "../../packages/ui/src/components/OddsButton/OddsButton.styles.ts"
/*!************************************************************************!*\
  !*** ../../packages/ui/src/components/OddsButton/OddsButton.styles.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANIMATION_STYLES: () => (/* binding */ ANIMATION_STYLES),
/* harmony export */   getStateStyles: () => (/* binding */ getStateStyles),
/* harmony export */   sizeStyles: () => (/* binding */ sizeStyles)
/* harmony export */ });
// ---------------------------------------------------------------------------
// Size map
// ---------------------------------------------------------------------------

var sizeStyles = {
  sm: {
    padding: '4px 8px',
    fontSize: '0.75rem'
  },
  md: {
    padding: '8px 12px',
    fontSize: '0.875rem'
  },
  lg: {
    padding: '12px 16px',
    fontSize: '1rem'
  }
};

// ---------------------------------------------------------------------------
// State styles
// ---------------------------------------------------------------------------

function getStateStyles(state) {
  switch (state) {
    case 'selected':
      return {
        background: 'var(--color-primary)',
        borderColor: 'var(--color-primary)',
        color: '#fff' // sole permitted hardcode — white text on primary background
      };
    case 'up':
      return {
        background: 'var(--color-surface)',
        borderColor: 'var(--color-odds-up)',
        color: 'var(--color-odds-up)',
        animation: 'pulseUp 600ms ease-in-out'
      };
    case 'down':
      return {
        background: 'var(--color-surface)',
        borderColor: 'var(--color-odds-down)',
        color: 'var(--color-odds-down)',
        animation: 'pulseDown 600ms ease-in-out'
      };
    case 'suspended':
    case 'locked':
      return {
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        color: 'var(--color-text-muted)',
        opacity: 0.5,
        cursor: 'not-allowed'
      };
    case 'default':
    default:
      return {
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        color: 'var(--color-text)'
      };
  }
}

// ---------------------------------------------------------------------------
// Keyframe animations injected as a <style> tag
// ---------------------------------------------------------------------------

var ANIMATION_STYLES = "\n@keyframes pulseUp {\n  0%, 100% { box-shadow: 0 0 0 0 var(--color-odds-up); }\n  50%       { box-shadow: 0 0 0 4px transparent; }\n}\n@keyframes pulseDown {\n  0%, 100% { box-shadow: 0 0 0 0 var(--color-odds-down); }\n  50%       { box-shadow: 0 0 0 4px transparent; }\n}\n";

/***/ },

/***/ "../../packages/ui/src/components/OddsButton/OddsButton.tsx"
/*!******************************************************************!*\
  !*** ../../packages/ui/src/components/OddsButton/OddsButton.tsx ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OddsButton: () => (/* binding */ OddsButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?f277");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OddsButton_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OddsButton.styles */ "../../packages/ui/src/components/OddsButton/OddsButton.styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// ---------------------------------------------------------------------------
// Odds display helper
// ---------------------------------------------------------------------------

function getOddsDisplay(state, odds) {
  if (state === 'suspended') return 'SUSP';
  if (state === 'locked') return '\uD83D\uDD12'; // 🔒
  return odds.toFixed(2);
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function OddsButton(_ref) {
  var {
    label,
    odds,
    state,
    size = 'md',
    onClick,
    disabled = false
  } = _ref;
  var isInteractionBlocked = disabled || state === 'suspended' || state === 'locked';
  var baseStyle = _objectSpread(_objectSpread(_objectSpread({
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2px',
    border: '1px solid',
    borderRadius: 'var(--layout-border-radius)',
    fontFamily: 'var(--font-family)',
    fontWeight: 600,
    lineHeight: 1.2,
    cursor: isInteractionBlocked ? 'not-allowed' : 'pointer',
    transition: 'background 150ms ease, border-color 150ms ease, color 150ms ease',
    minWidth: '64px',
    textAlign: 'center'
  }, _OddsButton_styles__WEBPACK_IMPORTED_MODULE_1__.sizeStyles[size]), (0,_OddsButton_styles__WEBPACK_IMPORTED_MODULE_1__.getStateStyles)(state)), disabled && state !== 'suspended' && state !== 'locked' ? {
    opacity: 0.5,
    cursor: 'not-allowed'
  } : {});
  var labelStyle = {
    fontSize: '0.75em',
    fontWeight: 400,
    color: 'inherit',
    opacity: 0.8,
    textTransform: 'uppercase',
    letterSpacing: '0.04em'
  };
  var oddsStyle = {
    fontSize: '1em',
    fontWeight: 700,
    color: 'inherit',
    fontFamily: state === 'suspended' ? 'var(--font-family)' : 'var(--font-family-mono)'
  };
  function handleClick() {
    if (!isInteractionBlocked && onClick) {
      onClick();
    }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style", {
      children: _OddsButton_styles__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_STYLES
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
      type: "button",
      style: baseStyle,
      onClick: handleClick,
      disabled: isInteractionBlocked,
      "aria-pressed": state === 'selected',
      "aria-disabled": isInteractionBlocked,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: labelStyle,
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: oddsStyle,
        children: getOddsDisplay(state, odds)
      })]
    })]
  });
}

/***/ },

/***/ "../../packages/ui/src/components/OddsButton/index.ts"
/*!************************************************************!*\
  !*** ../../packages/ui/src/components/OddsButton/index.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OddsButton: () => (/* reexport safe */ _OddsButton__WEBPACK_IMPORTED_MODULE_0__.OddsButton)
/* harmony export */ });
/* harmony import */ var _OddsButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OddsButton */ "../../packages/ui/src/components/OddsButton/OddsButton.tsx");


/***/ },

/***/ "../../packages/ui/src/components/ThemeShowcase/ThemeShowcase.styles.ts"
/*!******************************************************************************!*\
  !*** ../../packages/ui/src/components/ThemeShowcase/ThemeShowcase.styles.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bodyTextStyle: () => (/* binding */ bodyTextStyle),
/* harmony export */   cardStyle: () => (/* binding */ cardStyle),
/* harmony export */   colorBlockStyle: () => (/* binding */ colorBlockStyle),
/* harmony export */   headingTextStyle: () => (/* binding */ headingTextStyle),
/* harmony export */   labelStyle: () => (/* binding */ labelStyle),
/* harmony export */   monoTextStyle: () => (/* binding */ monoTextStyle),
/* harmony export */   oddsStates: () => (/* binding */ oddsStates),
/* harmony export */   radiusBoxStyle: () => (/* binding */ radiusBoxStyle),
/* harmony export */   sectionTitleStyle: () => (/* binding */ sectionTitleStyle)
/* harmony export */ });
// ---------------------------------------------------------------------------
// Section layout
// ---------------------------------------------------------------------------

var sectionTitleStyle = {
  fontSize: '1.1rem',
  fontWeight: 600,
  marginBottom: '8px',
  fontFamily: 'var(--font-family)'
};
var cardStyle = {
  background: 'var(--color-background-card)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--layout-border-radius)',
  padding: '16px'
};

// ---------------------------------------------------------------------------
// Color swatches
// ---------------------------------------------------------------------------

var colorBlockStyle = {
  width: '100%',
  height: '60px',
  borderRadius: 'var(--layout-border-radius)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--font-family-mono)',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: '#fff' // white text on color swatches — sole permitted hardcode
};

// ---------------------------------------------------------------------------
// Border radius demo
// ---------------------------------------------------------------------------

var radiusBoxStyle = {
  width: '60px',
  height: '60px',
  border: '2px solid var(--color-primary)',
  background: 'var(--color-surface)'
};

// ---------------------------------------------------------------------------
// Typography samples
// ---------------------------------------------------------------------------

var monoTextStyle = {
  fontFamily: 'var(--font-family-mono)',
  fontSize: '1.25rem',
  fontWeight: 700,
  color: 'var(--color-primary)'
};
var bodyTextStyle = {
  fontFamily: 'var(--font-family)',
  fontSize: '1rem',
  color: 'var(--color-text)'
};
var headingTextStyle = {
  fontFamily: 'var(--font-family)',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: 'var(--color-text)'
};
var labelStyle = {
  fontFamily: 'var(--font-family)',
  fontSize: '0.7rem',
  color: 'var(--color-text-muted)',
  marginTop: '4px',
  textAlign: 'center'
};

// ---------------------------------------------------------------------------
// OddsButton states sample data
// ---------------------------------------------------------------------------

var oddsStates = [{
  state: 'default',
  odds: 1.85,
  label: 'Casa'
}, {
  state: 'selected',
  odds: 1.85,
  label: 'Casa'
}, {
  state: 'up',
  odds: 2.1,
  label: 'Empate'
}, {
  state: 'down',
  odds: 3.25,
  label: 'Fora'
}, {
  state: 'suspended',
  odds: 2.0,
  label: 'Casa'
}, {
  state: 'locked',
  odds: 1.95,
  label: 'Casa'
}];

/***/ },

/***/ "../../packages/ui/src/components/ThemeShowcase/ThemeShowcase.tsx"
/*!************************************************************************!*\
  !*** ../../packages/ui/src/components/ThemeShowcase/ThemeShowcase.tsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeShowcase: () => (/* binding */ ThemeShowcase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?f277");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OddsButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OddsButton */ "../../packages/ui/src/components/OddsButton/index.ts");
/* harmony import */ var _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeShowcase.styles */ "../../packages/ui/src/components/ThemeShowcase/ThemeShowcase.styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




function ThemeShowcase(_ref) {
  var {
    className
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: className,
    style: {
      padding: '24px',
      background: 'var(--color-background)',
      color: 'var(--color-text)',
      maxWidth: '800px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
      style: {
        fontFamily: 'var(--font-family)',
        fontSize: '1.5rem',
        fontWeight: 700,
        marginBottom: '24px',
        color: 'var(--color-text)'
      },
      children: "Theme Showcase"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
      style: {
        marginBottom: '24px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.sectionTitleStyle,
        children: "Colors"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '16px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.cardStyle,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: _objectSpread(_objectSpread({}, _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.colorBlockStyle), {}, {
              background: 'var(--color-primary)'
            }),
            children: "Primary"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.cardStyle,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: _objectSpread(_objectSpread({}, _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.colorBlockStyle), {}, {
              background: 'var(--color-success)'
            }),
            children: "Success"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.cardStyle,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: _objectSpread(_objectSpread({}, _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.colorBlockStyle), {}, {
              background: 'var(--color-warning)'
            }),
            children: "Warning"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.cardStyle,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: _objectSpread(_objectSpread({}, _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.colorBlockStyle), {}, {
              background: 'var(--color-surface)'
            }),
            children: "Surface"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.cardStyle,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: _objectSpread(_objectSpread({}, _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.colorBlockStyle), {}, {
              background: 'var(--color-background)'
            }),
            children: "Background"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.cardStyle,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: _objectSpread(_objectSpread({}, _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.colorBlockStyle), {}, {
              background: 'var(--color-border)'
            }),
            children: "Border"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
      style: {
        marginBottom: '24px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.sectionTitleStyle,
        children: "Typography"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.cardStyle,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          style: {
            marginBottom: '16px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.labelStyle,
            children: "Heading"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.headingTextStyle,
            children: "OpenBet Core"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          style: {
            marginBottom: '16px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.labelStyle,
            children: "Body"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.bodyTextStyle,
            children: "This is sample body text demonstrating the default font family."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.labelStyle,
            children: "Mono Numbers (Odds)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            style: {
              display: 'flex',
              gap: '16px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.monoTextStyle,
              children: "1.85"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.monoTextStyle,
              children: "2.10"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.monoTextStyle,
              children: "3.25"
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
      style: {
        marginBottom: '24px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.sectionTitleStyle,
        children: "Border Radius"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.cardStyle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: _objectSpread(_objectSpread({}, _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.radiusBoxStyle), {}, {
              borderRadius: 'var(--layout-border-radius)'
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            style: _objectSpread(_objectSpread({}, _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.labelStyle), {}, {
              marginTop: 0,
              textAlign: 'left'
            }),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              style: {
                fontFamily: 'var(--font-family-mono)',
                fontSize: '0.8rem',
                color: 'var(--color-primary)'
              },
              children: "--layout-border-radius"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "valor definido pelo cliente via config"]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.sectionTitleStyle,
        children: "OddsButton States"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        style: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.cardStyle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
            gap: '16px'
          },
          children: _ThemeShowcase_styles__WEBPACK_IMPORTED_MODULE_2__.oddsStates.map(_ref2 => {
            var {
              state,
              odds,
              label
            } = _ref2;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_OddsButton__WEBPACK_IMPORTED_MODULE_1__.OddsButton, {
                label: label,
                odds: odds,
                state: state,
                size: "md"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                style: {
                  fontFamily: 'var(--font-family)',
                  fontSize: '0.7rem',
                  color: 'var(--color-text-muted)'
                },
                children: state
              })]
            }, state);
          })
        })
      })]
    })]
  });
}

/***/ },

/***/ "../../packages/ui/src/components/ThemeShowcase/index.ts"
/*!***************************************************************!*\
  !*** ../../packages/ui/src/components/ThemeShowcase/index.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeShowcase: () => (/* reexport safe */ _ThemeShowcase__WEBPACK_IMPORTED_MODULE_0__.ThemeShowcase)
/* harmony export */ });
/* harmony import */ var _ThemeShowcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeShowcase */ "../../packages/ui/src/components/ThemeShowcase/ThemeShowcase.tsx");


/***/ },

/***/ "../../packages/ui/src/index.ts"
/*!**************************************!*\
  !*** ../../packages/ui/src/index.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BetSlip: () => (/* reexport safe */ _components_BetSlip__WEBPACK_IMPORTED_MODULE_2__.BetSlip),
/* harmony export */   LiveScoreboard: () => (/* reexport safe */ _components_LiveScoreboard__WEBPACK_IMPORTED_MODULE_3__.LiveScoreboard),
/* harmony export */   MatchCard: () => (/* reexport safe */ _components_MatchCard__WEBPACK_IMPORTED_MODULE_1__.MatchCard),
/* harmony export */   OddsButton: () => (/* reexport safe */ _components_OddsButton__WEBPACK_IMPORTED_MODULE_0__.OddsButton),
/* harmony export */   OddsWidget: () => (/* reexport safe */ _widgets_OddsWidget__WEBPACK_IMPORTED_MODULE_5__.OddsWidget),
/* harmony export */   ThemeShowcase: () => (/* reexport safe */ _components_ThemeShowcase__WEBPACK_IMPORTED_MODULE_4__.ThemeShowcase)
/* harmony export */ });
/* harmony import */ var _components_OddsButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/OddsButton */ "../../packages/ui/src/components/OddsButton/index.ts");
/* harmony import */ var _components_MatchCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MatchCard */ "../../packages/ui/src/components/MatchCard/index.ts");
/* harmony import */ var _components_BetSlip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BetSlip */ "../../packages/ui/src/components/BetSlip/index.ts");
/* harmony import */ var _components_LiveScoreboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/LiveScoreboard */ "../../packages/ui/src/components/LiveScoreboard/index.ts");
/* harmony import */ var _components_ThemeShowcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ThemeShowcase */ "../../packages/ui/src/components/ThemeShowcase/index.ts");
/* harmony import */ var _widgets_OddsWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/OddsWidget */ "../../packages/ui/src/widgets/OddsWidget/index.ts");
// Barrel exports — components are added here as they are created







/***/ },

/***/ "../../packages/ui/src/widgets/OddsWidget/OddsWidget.tsx"
/*!***************************************************************!*\
  !*** ../../packages/ui/src/widgets/OddsWidget/OddsWidget.tsx ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOCK_EVENTS: () => (/* binding */ MOCK_EVENTS),
/* harmony export */   OddsWidget: () => (/* binding */ OddsWidget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?f277");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_OddsButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/OddsButton */ "../../packages/ui/src/components/OddsButton/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
var _excluded = ["eventId", "onOddsClick", "style"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }



// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Mock Data
// ---------------------------------------------------------------------------

var MOCK_EVENTS = {
  '123': {
    homeTeam: 'Flamengo',
    awayTeam: 'Palmeiras',
    odds: {
      home: 2.4,
      draw: 3.1,
      away: 2.8
    }
  },
  '124': {
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    odds: {
      home: 2.5,
      draw: 3.4,
      away: 2.6
    }
  },
  '125': {
    homeTeam: 'PSG',
    awayTeam: 'Bayern',
    odds: {
      home: 2.2,
      draw: 3.5,
      away: 2.9
    }
  }
};

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

var containerStyle = {
  background: 'var(--color-background-card)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--layout-border-radius)',
  padding: '16px',
  fontFamily: 'var(--font-family)'
};
var headerStyle = {
  fontWeight: 600,
  fontSize: '1rem',
  color: 'var(--color-text)',
  marginBottom: '12px',
  textAlign: 'center'
};

// OddsButton renders a React fragment (<style> + <button>), so each one must
// be wrapped in a div to prevent the <style> tag from becoming a flex/grid child
// and breaking the layout.
var oddsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '8px'
};
var oddsButtonWrapperStyle = {
  display: 'flex',
  justifyContent: 'center'
};

// ---------------------------------------------------------------------------
// React Component
// ---------------------------------------------------------------------------

function OddsWidget(_ref) {
  var {
      eventId = '123',
      onOddsClick,
      style
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  var eventData = MOCK_EVENTS[eventId];
  if (!eventData) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: _objectSpread(_objectSpread({}, containerStyle), {}, {
        color: 'var(--color-text-muted)',
        padding: '16px'
      }),
      children: "Evento n\xE3o encontrado"
    });
  }
  var {
    homeTeam,
    awayTeam,
    odds
  } = eventData;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", _objectSpread(_objectSpread({}, props), {}, {
    style: _objectSpread(_objectSpread({}, containerStyle), style),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: headerStyle,
      children: [homeTeam, " vs ", awayTeam]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: oddsGridStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: oddsButtonWrapperStyle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_OddsButton__WEBPACK_IMPORTED_MODULE_1__.OddsButton, {
          label: "Casa",
          odds: odds.home,
          state: "default",
          size: "sm",
          onClick: () => onOddsClick === null || onOddsClick === void 0 ? void 0 : onOddsClick({
            selection: 'home',
            odds: odds.home,
            eventId
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: oddsButtonWrapperStyle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_OddsButton__WEBPACK_IMPORTED_MODULE_1__.OddsButton, {
          label: "Emp",
          odds: odds.draw,
          state: "default",
          size: "sm",
          onClick: () => onOddsClick === null || onOddsClick === void 0 ? void 0 : onOddsClick({
            selection: 'draw',
            odds: odds.draw,
            eventId
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: oddsButtonWrapperStyle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_OddsButton__WEBPACK_IMPORTED_MODULE_1__.OddsButton, {
          label: "Fora",
          odds: odds.away,
          state: "default",
          size: "sm",
          onClick: () => onOddsClick === null || onOddsClick === void 0 ? void 0 : onOddsClick({
            selection: 'away',
            odds: odds.away,
            eventId
          })
        })
      })]
    })]
  }));
}

/***/ },

/***/ "../../packages/ui/src/widgets/OddsWidget/index.ts"
/*!*********************************************************!*\
  !*** ../../packages/ui/src/widgets/OddsWidget/index.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOCK_EVENTS: () => (/* reexport safe */ _OddsWidget__WEBPACK_IMPORTED_MODULE_0__.MOCK_EVENTS),
/* harmony export */   OddsWidget: () => (/* reexport safe */ _OddsWidget__WEBPACK_IMPORTED_MODULE_0__.OddsWidget)
/* harmony export */ });
/* harmony import */ var _OddsWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OddsWidget */ "../../packages/ui/src/widgets/OddsWidget/OddsWidget.tsx");


/***/ },

/***/ "./app/sportsbook-page.tsx"
/*!*********************************!*\
  !*** ./app/sportsbook-page.tsx ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SportsbookPage)
/* harmony export */ });
/* harmony import */ var _openbet_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openbet/ui */ "../../packages/ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@19.2.3/node_modules/react/jsx-runtime.js");
'use client';



// ---------------------------------------------------------------------------
// Mock data — 4 matches covering all MatchCard variants
// ---------------------------------------------------------------------------

var MOCK_MATCHES = [{
  id: 'match-1',
  homeTeam: 'Flamengo',
  awayTeam: 'Palmeiras',
  league: 'Brasileirão Série A',
  startTime: 'Hoje 21:00',
  variant: 'pre-match',
  odds: {
    home: 2.40,
    draw: 3.10,
    away: 2.80
  }
}, {
  id: 'match-2',
  homeTeam: 'Real Madrid',
  awayTeam: 'Barcelona',
  league: 'La Liga',
  variant: 'live',
  isLive: true,
  minute: 67,
  score: {
    home: 1,
    away: 1
  },
  odds: undefined
}, {
  id: 'match-3',
  homeTeam: 'Lakers',
  awayTeam: 'Warriors',
  league: 'NBA',
  startTime: 'Hoje 23:30',
  variant: 'pre-match',
  odds: {
    home: 1.85,
    away: 1.95
  }
}, {
  id: 'match-4',
  homeTeam: 'São Paulo',
  awayTeam: 'Corinthians',
  league: 'Paulistão',
  startTime: 'Amanhã 16:00',
  variant: 'featured',
  odds: {
    home: 2.20,
    draw: 3.00,
    away: 3.10
  }
}];

// ---------------------------------------------------------------------------
// SportsbookPage — exposed to the shell via Module Federation
// Styles use only CSS Custom Properties injected by the shell's ThemeProvider.
// No hardcoded colors — all visual tokens come from var(--color-*).
// ---------------------------------------------------------------------------

function SportsbookPage() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
      style: {
        margin: 0,
        fontSize: '1.125rem',
        fontWeight: 700,
        color: 'var(--color-text)',
        fontFamily: 'var(--font-family)'
      },
      children: "Destaques"
    }), MOCK_MATCHES.map(match => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_openbet_ui__WEBPACK_IMPORTED_MODULE_0__.MatchCard, {
      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,
      league: match.league,
      startTime: 'startTime' in match ? match.startTime : undefined,
      variant: match.variant,
      isLive: 'isLive' in match ? match.isLive : undefined,
      minute: 'minute' in match ? match.minute : undefined,
      score: 'score' in match ? match.score : undefined,
      odds: match.odds
    }, match.id))]
  });
}

/***/ }

}]);