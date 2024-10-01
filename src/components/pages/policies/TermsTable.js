import React from 'react';
import './TableStyles.css';
import { useTranslation } from 'react-i18next';

const TermsTable = () => {
    const { t } = useTranslation();

    return (
        <div className="table-container" style={{ margin: 'auto' }} >
            <table>
                <tbody>
                    <tr>
                        <td>{t('Content')}</td>
                        <td>{t('Content Desc')}</td>
                    </tr>
                    <tr>
                        <td>{t('Information')}</td>
                        <td>{t('Information Desc')}</td>
                    </tr>
                    <tr>
                        <td>{t('Personal data')}</td>
                        <td>{t('Personal data Desc')}</td>
                    </tr>
                    <tr>
                        <td>{t('Services')}</td>
                        <td>{t('Services Desc')}</td>
                    </tr>
                    <tr>
                        <td>{t('Sourcing')}</td>
                        <td>{t('Sourcing Desc')}</td>
                    </tr>
                    <tr>
                        <td>{t('Mobius Technology Solutions Affiliates, Our Affiliates')}</td>
                        <td>{t('Mobius Technology Solutions Affiliates, Our Affiliates Desc')}</td>
                    </tr>
                    <tr>
                        <td>{t('Terms of Use')}</td>
                        <td>{t('Terms of Use Desc')}</td>
                    </tr>
                    <tr>
                        <td>{t('Third Party Provider')}</td>
                        <td>{t('Third Party Provider Desc')}</td>
                    </tr>
                    <tr>
                        <td>"{t('users')}", "{t('you')}" or "{t('your')}"</td>
                        <td>{t('any person who accesses the Website')}</td>
                    </tr>
                    <tr>
                        <td>{t('Website')}</td>
                        <td><a href="mailto:contact@mobiustechnologysolutions.com" style={{ color: '#1a8ce0', fontWeight: 600 }}>contact@mobiustechnologysolutions.com</a>, {t('Website Desc')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TermsTable;
