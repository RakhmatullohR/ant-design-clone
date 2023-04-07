import { Settings } from "@styled-icons/ionicons-outline/Settings";
import Dashboard from "../view/Dashboard";
import Switch from "../view/Switch";
import Dropdown from "../view/Dropdown";
import Inputs from "../view/Inputs";
import Generic from "../view/Generic";
import Components from "../view/Components";
import Buttons from "../view/Buttons";
import Badge from "../view/Badge";
import Checkbox from "../view/Checkbox";
import Alert from "../view/Alert";
import Collapse from "../view/Collapse";
import Progress from "../view/Progress";
import Tooltip from "../view/Tooltip";
import Spinner from "../view/Spinner";
import DatePicker from "../view/DatePicker";
import GoogleMap from "../view/GoogleMap";
import YandexMap from "../view/YandexMap";
import Calendar from "../view/Calendar";
import Table from "../view/Table";
import Menu from "../view/Menu";
import Pagination from "../view/Pagination";
import YouTube from "../view/YouTube";
export const Routes = [
    {
        path: "/",
        component: Dashboard,
        title: "Landing Page",
        hidden: true,
        children: [],
    },
    {
        path: "/dashboard",
        component: Dashboard,
        title: "Dashboard",
        hidden: true,
        children: [],
    },
    {
        path: "/buttons",
        component: Buttons,
        title: "Buttons",
        hidden: false,
        children: [],
    },
    {
        path: "/inputs",
        component: Inputs,
        title: "Inputs",
        hidden: false,
        children: [],
    },
    {
        path: "/dropdown",
        component: Dropdown,
        title: "Dropdown",
        hidden: false,
        children: [],
    },
    {
        path: "/tooltip",
        component: Tooltip,
        title: "Tooltip",
        hidden: false,
        children: [],
    },
    {
        path: "/menu",
        component: Menu,
        title: "Menu",
        hidden: false,
        children: [],
    },
    {
        path: "/steps",
        component: Generic,
        title: "Steps",
        hidden: false,
        children: [],
    },
    {
        path: "/calendar",
        component: Calendar,
        title: "Calendar",
        hidden: false,
        children: [],
    },
    {
        path: "/maps",
        component: Generic,
        title: "Maps",
        hidden: false,
        children: [
            {
                path: "/googlemap",
                component: GoogleMap,
                title: "Google Map",
                hidden: false,
            },
            {
                path: "/yandexmap",
                component: YandexMap,
                title: "Yandex Map",
                hidden: false,
            },
            {
                path: "/kakaomap",
                component: Generic,
                title: "Kakao Map",
                hidden: false,
            },
        ],
    },
    {
        path: "/charts",
        component: Generic,
        title: "Charts",
        hidden: false,
        children: [
            {
                path: "/pie",
                component: Generic,
                title: "Pie Chart",
                hidden: false,
            },
        ],
    },
    {
        path: "/checkbox",
        component: Checkbox,
        title: "Checkbox",
        hidden: false,
        children: [],
    },
    {
        path: "/forms",
        component: Generic,
        title: "Forms",
        hidden: false,
        children: [
            {
                path: "/purejs",
                component: Generic,
                title: "Pure React",
                hidden: false,
                children: [],
            },
            {
                path: "/formik",
                component: Generic,
                title: "Formik Validation",
                hidden: false,
                children: [],
            },
        ],
    },
    {
        path: "/datePicker",
        component: DatePicker,
        title: "DatePicker",
        hidden: false,
        children: [],
    },
    {
        path: "/switch",
        component: Switch,
        title: "Switch",
        hidden: false,
        children: [],
    },
    {
        path: "/transfer",
        component: Generic,
        title: "Transfer",
        hidden: false,
        children: [],
    },
    {
        path: "/upload",
        component: Generic,
        title: "Upload",
        hidden: false,
        children: [],
    },
    {
        path: "/avatar",
        component: Generic,
        title: "Avatar",
        hidden: false,
        children: [],
    },
    {
        path: "/badge",
        component: Badge,
        title: "Badge",
        hidden: false,
        children: [],
    },
    {
        path: "/card",
        component: Generic,
        title: "Card",
        hidden: false,
        children: [],
    },
    {
        path: "/carousel",
        component: Generic,
        title: "Carousel",
        hidden: false,
        children: [],
    },
    {
        path: "/collapse",
        component: Collapse,
        title: "Collapse",
        hidden: false,
        children: [],
    },
    {
        path: "/image",
        component: Generic,
        title: "Image",
        hidden: false,
        children: [],
    },
    {
        path: "/pagination",
        component: Pagination,
        title: "Pagination",
        hidden: false,
        children: [],
    },
    {
        path: "/popover",
        component: Generic,
        title: "Popover",
        hidden: false,
        children: [],
    },
    {
        path: "/table",
        component: Table,
        title: "Table",
        hidden: false,
        children: [],
    },
    {
        path: "/tabs",
        component: Generic,
        title: "Tabs",
        hidden: false,
        children: [],
    },
    {
        path: "/alert",
        component: Alert,
        title: "Alert",
        hidden: false,
        children: [],
    },
    {
        path: "/drawer",
        component: Generic,
        title: "Drawer",
        hidden: false,
        children: [],
    },
    {
        path: "/modal",
        component: Generic,
        title: "Modal",
        hidden: false,
        children: [],
    },
    {
        path: "/notification",
        component: Generic,
        title: "Notification",
        hidden: false,
        children: [],
    },
    {
        path: "/popConfirm",
        component: Generic,
        title: "PopConfirm",
        hidden: false,
        children: [],
    },
    {
        path: "/progress",
        component: Progress,
        title: "Progress",
        hidden: false,
        children: [],
    },
    {
        path: "/result",
        component: Generic,
        title: "Result",
        hidden: false,
        children: [],
    },
    {
        path: "/spinner",
        component: Spinner,
        title: "Spinner",
        hidden: false,
        children: [],
    },
    {
        path: "/typography",
        component: Generic,
        title: "Typography",
        hidden: false,
        children: [],
    },
    // hidden
    {
        path: "/docs",
        component: Generic,
        Icon: Settings,
        title: "Docs",
        hidden: true,
        children: [],
    },
    {
        path: "/components",
        component: Components,
        Icon: Settings,
        title: "Components",
        hidden: true,
        children: [],
    },
    {
        path: "/resources",
        component: Generic,
        Icon: Settings,
        title: "Resources",
        hidden: true,
        children: [],
    },
    {
        path: "/youtube",
        component: YouTube,
        Icon: Settings,
        title: "YouTube",
        hidden: true,
        children: [],
    },
];
