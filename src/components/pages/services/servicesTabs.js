import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import './services.css';
import { useMediaQuery } from 'react-responsive';
import { FaAngleDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Health from './health';
import Infrastructural from './infrastructural';
import IndustrialAutomation from './industrialAutomation';
import IndustrialMachines from './industrialMachines';
import IndustrialSafety from './industrialSafety';
import IndustrialSolutions from './industrialSolutions';
import OilAndGasFields from './oilAndGasFields';
import SurveillanceSolutions from './surveillanceSolutions';
import TradeSolutions from './tradeSolutions';
import RawMaterials from './rawMaterials';
import SmartLogistics from './smartLogistics';
import EnergyAndPowerSolutions from './energyAndPowerSolutions';

// Helper function to truncate label if needed
const truncateLabel = (label, maxLength = 25) => {
    if (label.length <= maxLength) return label;
    let truncated = label.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > 0) truncated = truncated.substring(0, lastSpace);
    return `${truncated}...`;
};

const Tab = ({ label, isActive, path }) => (
    <Link to={path} className={`tab ${isActive ? 'active' : 'nonActiveTabs'}`} title={label}>
        {truncateLabel(label)}
    </Link>
);

const DropdownTab = ({ label, onClick, isOpen }) => (
    <button className="dropdown-tab" onClick={onClick}>
        {label} <FaAngleDown className={isOpen ? 'open' : ''} />
    </button>
);

const DesktopTabs = ({ tabs, activePath, isDropdownOpen, toggleDropdown, dropdownRef }) => {
    const visibleTabs = tabs.slice(0, 6);
    const dropdownTabs = tabs.slice(6);

    return (
        <div className="tab-list">
            {visibleTabs.map((tab) => (
                <Tab key={tab.id} label={tab.label} path={tab.path} isActive={activePath === tab.path} />
            ))}
            {dropdownTabs.length > 0 && (
                <div className="dropdown" ref={dropdownRef}>
                    <DropdownTab label="More Services" isOpen={isDropdownOpen} onClick={toggleDropdown} />
                    {isDropdownOpen && (
                        <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
                            {dropdownTabs.map((tab) => (
                                <Tab key={tab.id} label={tab.label} path={tab.path} isActive={activePath === tab.path} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const selectElement = document.querySelector('.mobile-tabs select');

selectElement.addEventListener('click', function () {
  this.classList.toggle('open');
});

document.addEventListener('click', function (event) {
  if (!selectElement.contains(event.target)) {
    selectElement.classList.remove('open');
  }
});

const MobileTabs = ({ tabs, activeTab, handleTabClick }) => {
    return (
        <div className="mobile-tabs">
            <select
                value={activeTab}
                onChange={(e) => handleTabClick(parseInt(e.target.value))}
            >
                {tabs.map((tab) => (
                    <option key={tab.id} value={tab.id}>{tab.label}</option>
                ))}
            </select>
        </div>
    );
};

const ServicesTabs = ({ isBg }) => {
    const location = useLocation();
    const { t } = useTranslation();
    const tabs = [
        { id: 1, label: 'Health, Safety, and Rescue', path: '/health', content: <Health /> },
        { id: 2, label: 'Infrastructural Solutions and Structural Engineering', path: '/infrastructural', content: <Infrastructural /> },
        { id: 3, label: 'Industrial Automation and Digitalization', path: '/industrialAutomation', content: <IndustrialAutomation /> },
        { id: 4, label: 'Industrial Machines', path: '/industrialMachines', content: <IndustrialMachines /> },
        { id: 5, label: 'Industrial Safety', path: '/industrialSafety', content: <IndustrialSafety /> },
        { id: 6, label: 'Industrial Solutions', path: '/industrialSolutions', content: <IndustrialSolutions /> },
        { id: 7, label: 'Oil And Gas Fields', path: '/oilAndGasFields', content: <OilAndGasFields /> },
        { id: 8, label: 'Surveillance Solutions', path: '/surveillanceSolutions', content: <SurveillanceSolutions /> },
        { id: 9, label: 'Trade Solutions', path: '/tradeSolutions', content: <TradeSolutions /> },
        { id: 10, label: 'Raw Materials', path: '/rawMaterials', content: <RawMaterials /> },
        { id: 11, label: 'Smart Logistics', path: '/smartLogistics', content: <SmartLogistics /> },
        { id: 12, label: 'Energy and Power Solutions', path: '/energyAndPowerSolutions', content: <EnergyAndPowerSolutions /> },
    ];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust the breakpoint as needed

    const handleTabClick = (tabId) => {
        setIsDropdownOpen(false); // Close dropdown on selection
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };


    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <section
            id="services"
            className={`section-padding services site_bg ${isBg === "yes" ? "bg-one" : ""}`}
            style={{ paddingTop: isMobile ? '60px' : '150px', zIndex: 1 }}
        >
            <div className="container">
                {isMobile ? (
                    <MobileTabs tabs={tabs} activeTab={location.pathname} handleTabClick={handleTabClick} />
                ) : (
                    <DesktopTabs
                        tabs={tabs}
                        activePath={location.pathname}
                        handleTabClick={handleTabClick}
                        isDropdownOpen={isDropdownOpen}
                        toggleDropdown={toggleDropdown}
                        dropdownRef={dropdownRef}
                    />
                )}
                <div>
                    {tabs.find(tab => location.pathname === tab.path)?.content}
                </div>
            </div>
        </section>
    );
};

export default ServicesTabs;
