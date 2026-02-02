import { Injectable, signal } from '@angular/core';

/**
 * Application Configuration
 */
export interface AppConfig {
  apiUrl: string;
  environment: 'development' | 'production';
  version: string;
  features: {
    enableAuth: boolean;
    enableAnalytics: boolean;
    enableDarkMode: boolean;
  };
}

/**
 * Configuration Service
 * Manages application configuration using Signals
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config = signal<AppConfig>({
    apiUrl: '/api/v1',
    environment: 'development',
    version: '1.0.0',
    features: {
      enableAuth: true,
      enableAnalytics: false,
      enableDarkMode: true
    }
  });

  // Public readonly signals
  public readonly apiUrl = this.config().apiUrl;
  public readonly environment = this.config().environment;
  public readonly version = this.config().version;
  public readonly features = this.config().features;

  /**
   * Get current config
   */
  getConfig(): AppConfig {
    return this.config();
  }

  /**
   * Update config (useful for testing or dynamic changes)
   */
  updateConfig(updates: Partial<AppConfig>): void {
    this.config.update(current => ({ ...current, ...updates }));
  }

  /**
   * Check if feature is enabled
   */
  isFeatureEnabled(feature: keyof AppConfig['features']): boolean {
    return this.config().features[feature];
  }
}
