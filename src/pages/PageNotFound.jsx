import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="page-not-found-cont">
      <h1>404!</h1>
      <p>{t('page_not_found')}</p>
      <div className="inline">
        <NavLink to={"/"}> {t('back')}&nbsp;</NavLink> 
        <p> {t('to_home')} </ p>
      </div>
    </div>
  )
}

export default PageNotFound