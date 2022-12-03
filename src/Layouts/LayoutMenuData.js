import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Navdata = () => {
    const history = useHistory();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isPayments, setIsPayments] = useState(false);
    const [isCustomers, setIsCustomers] = useState(false);
    const [isDevelopers, setIsDevelopers] = useState(false);
    const [isSettings, setIsSettings] = useState(false);
   
    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Payments') {
            setIsPayments(false);
        }
        if (iscurrentState !== 'Customers') {
            setIsCustomers(false);
        }
        if (iscurrentState !== 'Developers') {
            setIsDevelopers(false);
        }
        if (iscurrentState !== 'Settings') {
            setIsSettings(false);
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isPayments,
        isCustomers,
        isDevelopers,
        isSettings
    ]);

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboards",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
        },
        {
            id: "payments",
            label: "Payments",
            icon: "ri-dashboard-2-line",
            link: "/payments",
            stateVariables: isPayments,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isPayments);
                setIscurrentState('Payments');
                updateIconSidebar(e);
            },
        },
        {
            id: "customers",
            label: "Customers",
            icon: "ri-dashboard-2-line",
            link: "/customers",
            stateVariables: isCustomers,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isCustomers);
                setIscurrentState('Customers');
                updateIconSidebar(e);
            },
        },
        {
            id: "developers",
            label: "Developers",
            icon: "ri-dashboard-2-line",
            link: "/developers",
            stateVariables: isDevelopers,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDevelopers);
                setIscurrentState('Developers');
                updateIconSidebar(e);
            },
        },
        {
            id: "settings",
            label: "Settings",
            icon: "ri-dashboard-2-line",
            link: "/settings",
            stateVariables: isSettings,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isSettings);
                setIscurrentState('Settings');
                updateIconSidebar(e);
            },
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;