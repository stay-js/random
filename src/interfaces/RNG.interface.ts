export interface RNGProps {
  min: number;
  max: number;
}

export interface RNGErrors {
  min?: string;
  max?: string;
}

export interface RNGInputEvent {
  key: string;
  value: number;
}
