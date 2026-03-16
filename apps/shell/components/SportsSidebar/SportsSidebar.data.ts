import {
  type LucideIcon,
  CircleDot,
  Circle,
  Activity,
  Gamepad2,
  Trophy,
  Zap,
  Flag,
  Shield,
} from 'lucide-react'

export interface Sport {
  id: string
  name: string
  liveCount: number
  Icon: LucideIcon
}

export const SPORTS: Sport[] = [
  { id: 'football', name: 'Football', liveCount: 12, Icon: CircleDot },
  { id: 'basketball', name: 'Basketball', liveCount: 8, Icon: Circle },
  { id: 'tennis', name: 'Tennis', liveCount: 5, Icon: Activity },
  { id: 'volleyball', name: 'Volleyball', liveCount: 3, Icon: Trophy },
  { id: 'esports', name: 'E-Sports', liveCount: 15, Icon: Gamepad2 },
  { id: 'american-football', name: 'Am. Football', liveCount: 2, Icon: Shield },
  { id: 'baseball', name: 'Baseball', liveCount: 0, Icon: Flag },
  { id: 'hockey', name: 'Hockey', liveCount: 4, Icon: Zap },
]

export const COMPETITIONS = ['UEFA Champions League', 'Premier League', 'La Liga', 'Brasileirão']
