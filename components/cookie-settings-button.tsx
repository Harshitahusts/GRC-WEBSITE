"use client";

import { openCookieSettings } from "@/lib/consent";
import { Icon } from "./icon";

export function CookieSettingsButton() {
  return (
    <button type="button" className="btn" onClick={openCookieSettings}>
      <Icon name="sliders" /> Open cookie settings
    </button>
  );
}
