import { create } from 'zustand';

export interface ThemeSettings {
  accentColor: string;
  bgPrimary: string;
  bgSecondary: string;
  textPrimary: string;
  textSecondary: string;
  borderColor: string;
  cardBg: string;
  fontFamily: string;
  borderRadius: string;
  preset: string;
}

export type ThemeMode = 'dark' | 'light';

const presets: Record<string, ThemeSettings> = {
  default: {
    accentColor: '#22c55e', bgPrimary: '#000000', bgSecondary: '#0a0a0a',
    textPrimary: '#ffffff', textSecondary: '#a3a3a3', borderColor: '#262626',
    cardBg: '#171717', fontFamily: "'IBM Plex Sans', sans-serif", borderRadius: '16px', preset: 'default',
  },
  midnight: {
    accentColor: '#3b82f6', bgPrimary: '#0c0a1a', bgSecondary: '#110e22',
    textPrimary: '#e2e8f0', textSecondary: '#94a3b8', borderColor: '#1e1b3a',
    cardBg: '#16132e', fontFamily: "'IBM Plex Sans', sans-serif", borderRadius: '16px', preset: 'midnight',
  },
  ember: {
    accentColor: '#f97316', bgPrimary: '#0a0604', bgSecondary: '#120c06',
    textPrimary: '#fef3c7', textSecondary: '#a3856a', borderColor: '#2a1a0a',
    cardBg: '#1a1008', fontFamily: "'IBM Plex Sans', sans-serif", borderRadius: '16px', preset: 'ember',
  },
  rose: {
    accentColor: '#f43f5e', bgPrimary: '#0a0408', bgSecondary: '#10060c',
    textPrimary: '#fce7f3', textSecondary: '#a3708a', borderColor: '#2a0a1a',
    cardBg: '#1a0810', fontFamily: "'IBM Plex Sans', sans-serif", borderRadius: '16px', preset: 'rose',
  },
  arctic: {
    accentColor: '#06b6d4', bgPrimary: '#040a0c', bgSecondary: '#061012',
    textPrimary: '#e0f2fe', textSecondary: '#7aa3b0', borderColor: '#0a2028',
    cardBg: '#081820', fontFamily: "'IBM Plex Sans', sans-serif", borderRadius: '16px', preset: 'arctic',
  },
  gold: {
    accentColor: '#eab308', bgPrimary: '#080804', bgSecondary: '#0e0e06',
    textPrimary: '#fef9c3', textSecondary: '#a3986a', borderColor: '#28240a',
    cardBg: '#181608', fontFamily: "'IBM Plex Sans', sans-serif", borderRadius: '16px', preset: 'gold',
  },
};

const STORAGE_KEY = 'paraa-theme-v2';

interface StoredTheme {
  theme: ThemeSettings;
  mode: ThemeMode;
}

function loadTheme(): StoredTheme | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveTheme(theme: ThemeSettings, mode: ThemeMode) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme, mode }));
  } catch {}
}

function applyTheme(theme: ThemeSettings, mode: ThemeMode) {
  if (typeof document === 'undefined') return;

  const root = document.documentElement.style;
  root.setProperty('--accent', theme.accentColor);
  root.setProperty('--bg-primary', theme.bgPrimary);
  root.setProperty('--bg-secondary', theme.bgSecondary);
  root.setProperty('--text-primary', theme.textPrimary);
  root.setProperty('--text-secondary', theme.textSecondary);
  root.setProperty('--border-color', theme.borderColor);
  root.setProperty('--card-bg', theme.cardBg);
  root.setProperty('--radius', theme.borderRadius);

  document.body.style.fontFamily = theme.fontFamily;
  document.body.setAttribute('data-theme-mode', mode);
}

const stored = loadTheme();
const initialTheme = stored?.theme ?? presets.default;
const initialMode: ThemeMode = stored?.mode ?? 'dark';

if (typeof window !== 'undefined') {
  applyTheme(initialTheme, initialMode);
}

interface ThemeState {
  theme: ThemeSettings;
  mode: ThemeMode;
  presets: Record<string, ThemeSettings>;
  setTheme: (t: Partial<ThemeSettings>) => void;
  applyPreset: (name: string) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  resetTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: initialTheme,
  mode: initialMode,
  presets,
  setTheme: (data) => set((s) => {
    const nextTheme = { ...s.theme, ...data, preset: 'custom' };
    saveTheme(nextTheme, s.mode);
    applyTheme(nextTheme, s.mode);
    return { theme: nextTheme };
  }),
  applyPreset: (name) => set((s) => {
    const nextTheme = presets[name] || presets.default;
    saveTheme(nextTheme, s.mode);
    applyTheme(nextTheme, s.mode);
    return { theme: nextTheme };
  }),
  setMode: (mode) => set((s) => {
    saveTheme(s.theme, mode);
    applyTheme(s.theme, mode);
    return { mode };
  }),
  toggleMode: () => set((s) => {
    const mode: ThemeMode = s.mode === 'dark' ? 'light' : 'dark';
    saveTheme(s.theme, mode);
    applyTheme(s.theme, mode);
    return { mode };
  }),
  resetTheme: () => set(() => {
    const nextTheme = presets.default;
    const mode: ThemeMode = 'dark';
    saveTheme(nextTheme, mode);
    applyTheme(nextTheme, mode);
    return { theme: nextTheme, mode };
  }),
}));
