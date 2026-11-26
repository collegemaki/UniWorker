import { AccountScreen } from "../pages/account/AccountScreen.js";
import { AdminScreen } from "../pages/admin/AdminScreen.js";
import { DashboardScreen } from "../pages/dashboard/DashboardScreen.js";
import { HomeScreen } from "../pages/home/HomeScreen.js";
import { SettingsScreen } from "../pages/settings/SettingsScreen.js";

const screens = {
  home: HomeScreen,
  account: AccountScreen,
  settings: SettingsScreen,
  dashboard: DashboardScreen,
  admin: AdminScreen
};

export class ScreenRegistry {
  create(screenId) {
    const Screen = screens[screenId];
    if (!Screen) {
      throw new Error(`Unknown screen: ${screenId}`);
    }
    return new Screen();
  }
}
