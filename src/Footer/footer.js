import React from 'react';
import './footer.css';

const footer = () => (
  <footer id="footer" className="footer">
    <div className="footer-bottom">
      <div className="flex-item-footer">
        <h1 className="footer-title"><a href="https://itgid.info">2020. Currency Exchange</a></h1>
        <p>All Right Reserved</p>
      </div>

      <div className="flex-item-footer">
        <div className="module-body">
          <ul className="list-unstyled">
            <li><a href="/sitemaps.xml" tooltip="Карта сайта">Карта сайта</a></li>
            <li><a href="/sitemaps.xml" target="_blank" tooltip="Google sitemap">Google sitemap</a></li>
          </ul>
        </div>
      </div>

      <div className="flex-item-footer">
        <div className="module-body">
          <ul className="list-unstyled">
            <li><a href="/contact" tooltip="Контакты">Контакты</a></li>
            <li><a href="/d">Гарантии</a></li>
            <li><a href="/s">О сервисе</a></li>
            <li><a href="/o">Условия возврата</a></li>
            <li><a href="/p">Соглашение о использовании сервиса</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default footer;
