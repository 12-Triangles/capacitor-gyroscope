export interface GyroscopePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
