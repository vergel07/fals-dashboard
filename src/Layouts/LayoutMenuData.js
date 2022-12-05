import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Navdata = () => {
    const history = useHistory();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isPayment, setIsPayment] = useState(false);
    const [isCustomer, setIsCustomer] = useState(false);
    const [isDeveloper, setIsDeveloper] = useState(false);
    const [isSetting, setIsSetting] = useState(false);
   
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
        if (iscurrentState !== 'Payment') {
            setIsPayment(false);
        }
        if (iscurrentState !== 'Customer') {
            setIsCustomer(false);
        }
        if (iscurrentState !== 'Developer') {
            setIsDeveloper(false);
        }
        if (iscurrentState !== 'Setting') {
            setIsSetting(false);
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isPayment,
        isCustomer,
        isDeveloper,
        isSetting
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
            id: "payment",
            label: "Payments",
            icon: "ri-dashboard-2-line",
            link: "/payments",
            stateVariables: isPayment,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isPayment);
                setIscurrentState('Payment');
                updateIconSidebar(e);
            },
        },
        {
            id: "customer",
            label: "Customers",
            icon: "ri-dashboard-2-line",
            link: "/customer",
            stateVariables: isCustomer,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isCustomer);
                setIscurrentState('Customer');
                updateIconSidebar(e);
            },
        },
        {
            id: "developer",
            label: "Developers",
            icon: "ri-dashboard-2-line",
            link: "/developer",
            stateVariables: isDeveloper,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDeveloper);
                setIscurrentState('Developer');
                updateIconSidebar(e);
            },
        },
        {
            id: "setting",
            label: "Settings",
            icon: "ri-dashboard-2-line",
            link: "/setting",
            stateVariables: isSetting,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isSetting);
                setIscurrentState('Setting');
                updateIconSidebar(e);
            },
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;