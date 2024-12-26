import DefaultTheme from "vitepress/theme-without-fonts";
import './google-fonts.css'
import CustomLayout from './CustomLayout.vue'

export default {
    extends: DefaultTheme,
    Layout: CustomLayout
}
