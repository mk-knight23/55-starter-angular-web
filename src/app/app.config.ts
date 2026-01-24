import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { 
  LucideAngularModule, 
  Zap, 
  Shield, 
  Layers, 
  Cpu, 
  Github, 
  Sun, 
  Moon,
  ChevronRight,
  Code2,
  Library,
  Terminal,
  Database,
  Search,
  Layout,
  ExternalLink
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({ 
      Zap, 
      Shield, 
      Layers, 
      Cpu, 
      Github, 
      Sun, 
      Moon,
      ChevronRight,
      Code2,
      Library,
      Terminal,
      Database,
      Search,
      Layout,
      ExternalLink
    }))
  ]
};
