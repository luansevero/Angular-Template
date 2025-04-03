import { InjectionToken, ValueProvider, inject } from '@angular/core';
import type { IconSize } from './ui-icon.directive';

export interface UIIconConfig {
	size: IconSize;
}

const defaultConfig: UIIconConfig = {
	size: 'base',
};

const UIIconConfigToken = new InjectionToken<UIIconConfig>('UIIconConfig');

export function provideUIIconConfig(config: Partial<UIIconConfig>): ValueProvider {
	return { provide: UIIconConfigToken, useValue: { ...defaultConfig, ...config } };
}

export function injectUIIconConfig(): UIIconConfig {
	return inject(UIIconConfigToken, { optional: true }) ?? defaultConfig;
}