import type { CSSProperties } from 'react'
import type { OddsButtonSize, OddsButtonState } from './OddsButton.types'
export declare const sizeStyles: Record<OddsButtonSize, CSSProperties>
export declare function getStateStyles(state: OddsButtonState): CSSProperties
export declare const ANIMATION_STYLES =
  '\n@keyframes pulseUp {\n  0%, 100% { box-shadow: 0 0 0 0 var(--color-odds-up); }\n  50%       { box-shadow: 0 0 0 4px transparent; }\n}\n@keyframes pulseDown {\n  0%, 100% { box-shadow: 0 0 0 0 var(--color-odds-down); }\n  50%       { box-shadow: 0 0 0 4px transparent; }\n}\n'
