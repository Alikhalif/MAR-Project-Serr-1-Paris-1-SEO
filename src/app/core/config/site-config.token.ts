// site-config.token.ts
import { InjectionToken } from '@angular/core';
import { SiteConfig } from './site-config.model';

export const SITE_CONFIG_TOKEN = new InjectionToken<SiteConfig>('SITE_CONFIG');
