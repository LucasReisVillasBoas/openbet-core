"use strict";
(self["webpackChunksportsbook"] = self["webpackChunksportsbook"] || []).push([["app_sportsbook-page_tsx"],{

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

/***/ },

/***/ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.development.js"
/*!*****************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?f277");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

var didWarnAboutKeySpread = {};
function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    {
      if (hasOwnProperty.call(props, 'key')) {
        var componentName = getComponentNameFromType(type);
        var keys = Object.keys(props).filter(function (k) {
          return k !== 'key';
        });
        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

          didWarnAboutKeySpread[componentName + beforeExample] = true;
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ },

/***/ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"
/*!*******************************************************************************!*\
  !*** ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ },

/***/ "../../node_modules/.pnpm/react@19.2.3/node_modules/react/cjs/react-jsx-runtime.development.js"
/*!*****************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/react@19.2.3/node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 true &&
  (function () {
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE
          ? null
          : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if ("object" === typeof type)
        switch (
          ("number" === typeof type.tag &&
            console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          type.$$typeof)
        ) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return type.displayName || "Context";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type ||
              ((type = innerType.displayName || innerType.name || ""),
              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
            return type;
          case REACT_MEMO_TYPE:
            return (
              (innerType = type.displayName || null),
              null !== innerType
                ? innerType
                : getComponentNameFromType(type.type) || "Memo"
            );
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = !1;
      } catch (e) {
        JSCompiler_inline_result = !0;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 =
          ("function" === typeof Symbol &&
            Symbol.toStringTag &&
            value[Symbol.toStringTag]) ||
          value.constructor.name ||
          "Object";
        JSCompiler_temp_const.call(
          JSCompiler_inline_result,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          JSCompiler_inline_result$jscomp$0
        );
        return testStringCoercion(value);
      }
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE) return "<>";
      if (
        "object" === typeof type &&
        null !== type &&
        type.$$typeof === REACT_LAZY_TYPE
      )
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning) return !1;
      }
      return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown ||
          ((specialPropKeyWarningShown = !0),
          console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
      }
      warnAboutAccessingKey.isReactWarning = !0;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: !0
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] ||
        ((didWarnAboutElementRef[componentName] = !0),
        console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
      componentName = this.props.ref;
      return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
      var refProp = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        props: props,
        _owner: owner
      };
      null !== (void 0 !== refProp ? refProp : null)
        ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
          })
        : Object.defineProperty(type, "ref", { enumerable: !1, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(
      type,
      config,
      maybeKey,
      isStaticChildren,
      debugStack,
      debugTask
    ) {
      var children = config.children;
      if (void 0 !== children)
        if (isStaticChildren)
          if (isArrayImpl(children)) {
            for (
              isStaticChildren = 0;
              isStaticChildren < children.length;
              isStaticChildren++
            )
              validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else validateChildKeys(children);
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function (k) {
          return "key" !== k;
        });
        isStaticChildren =
          0 < keys.length
            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
            : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] ||
          ((keys =
            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
          console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ),
          (didWarnAboutKeySpread[children + isStaticChildren] = !0));
      }
      children = null;
      void 0 !== maybeKey &&
        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
      hasValidKey(config) &&
        (checkKeyStringCoercion(config.key), (children = "" + config.key));
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      children &&
        defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type
            ? type.displayName || type.name || "Unknown"
            : type
        );
      return ReactElement(
        type,
        children,
        maybeKey,
        getOwner(),
        debugStack,
        debugTask
      );
    }
    function validateChildKeys(node) {
      isValidElement(node)
        ? node._store && (node._store.validated = 1)
        : "object" === typeof node &&
          null !== node &&
          node.$$typeof === REACT_LAZY_TYPE &&
          ("fulfilled" === node._payload.status
            ? isValidElement(node._payload.value) &&
              node._payload.value._store &&
              (node._payload.value._store.validated = 1)
            : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
      return (
        "object" === typeof object &&
        null !== object &&
        object.$$typeof === REACT_ELEMENT_TYPE
      );
    }
    var React = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2994"),
      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
      REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
      REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
      REACT_MEMO_TYPE = Symbol.for("react.memo"),
      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
      ReactSharedInternals =
        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      isArrayImpl = Array.isArray,
      createTask = console.createTask
        ? console.createTask
        : function () {
            return null;
          };
    React = {
      react_stack_bottom_frame: function (callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
      React,
      UnknownOwner
    )();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = function (type, config, maybeKey) {
      var trackActualOwner =
        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(
        type,
        config,
        maybeKey,
        !1,
        trackActualOwner
          ? Error("react-stack-top-frame")
          : unknownOwnerDebugStack,
        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
      );
    };
    exports.jsxs = function (type, config, maybeKey) {
      var trackActualOwner =
        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(
        type,
        config,
        maybeKey,
        !0,
        trackActualOwner
          ? Error("react-stack-top-frame")
          : unknownOwnerDebugStack,
        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
      );
    };
  })();


/***/ },

/***/ "../../node_modules/.pnpm/react@19.2.3/node_modules/react/jsx-runtime.js"
/*!*******************************************************************************!*\
  !*** ../../node_modules/.pnpm/react@19.2.3/node_modules/react/jsx-runtime.js ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "../../node_modules/.pnpm/react@19.2.3/node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }

}]);