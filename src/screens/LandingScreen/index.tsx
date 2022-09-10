import * as React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Link, RouteProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { IntlProps } from '../../';
import { LogoIcon } from '../../assets/images/LogoIcon';
import { MarketsTable } from '../../containers';
import { toggleColorTheme } from '../../helpers';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
  EffectFade,Navigation,Pagination
} from 'swiper/core';

import mainLogo from'../../assets/images/logo.png';

import {
    RootState,
    selectCurrentColorTheme,
    selectUserLoggedIn,
} from '../../modules';

const FeaturesExchangeIcon = require('../../assets/images/landing/features/Exchange.svg');
const FeaturesTypesIcon = require('../../assets/images/landing/features/Types.svg');
const FeaturesCustomizeIcon = require('../../assets/images/landing/features/Customize.svg');
const FeaturesSecurityIcon = require('../../assets/images/landing/features/Security.svg');
const FeaturesCommunityIcon = require('../../assets/images/landing/features/Community.svg');
const FeaturesAPIIcon = require('../../assets/images/landing/features/API.svg');

const TelegramIcon = require('../../assets/images/landing/social/Telegram.svg');
const LinkedInIcon = require('../../assets/images/landing/social/LinkedIn.svg');
const TwitterIcon = require('../../assets/images/landing/social/Twitter.svg');
const YouTubeIcon = require('../../assets/images/landing/social/YouTube.svg');
const RedditIcon = require('../../assets/images/landing/social/Reddit.svg');
const FacebookIcon = require('../../assets/images/landing/social/Facebook.svg');
const MediumIcon = require('../../assets/images/landing/social/Medium.svg');
const CoinMarketIcon = require('../../assets/images/landing/social/CoinMarket.svg');


interface ReduxProps {
    isLoggedIn: boolean;
    colorTheme: string;
}

type Props = ReduxProps & RouteProps & IntlProps;
SwiperCore.use([EffectFade,Navigation,Pagination]);

class Landing extends React.Component<Props> {
    public componentDidMount() {
        if (this.props.colorTheme === 'light') {
            toggleColorTheme('dark');
        }
    }

    public componentWillReceiveProps(next: Props) {
        if (next.colorTheme === 'light') {
            toggleColorTheme('dark');
        }
    }

    public componentWillUnmount() {
        if (this.props.colorTheme === 'light') {
            toggleColorTheme(this.props.colorTheme);
        }
    }

    public renderHeader() {
        if (this.props.isLoggedIn) {
            return (
                <div className="pg-landing-screen__header">
                    <div className="pg-landing-screen__header__wrap">
                        <div className="pg-landing-screen__header__wrap__left" onClick={e => this.handleScrollTop()}>
							<img className="pg-landing-mainLogo" src={mainLogo}/>
                            <LogoIcon /> 
                        </div>
                        <div className="pg-landing-screen__header__wrap__right">
                            <Link to="/profile" className="landing-button">
                                {this.translate('page.body.landing.header.button1')}
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="pg-landing-screen__header">
                <div className="pg-landing-screen__header__wrap">
                    <div className="pg-landing-screen__header__wrap__left" onClick={e => this.handleScrollTop()}>
						<img className="pg-landing-mainLogo" src={mainLogo}/>
                        <LogoIcon />
                    </div>
                    <div className="pg-landing-screen__header__wrap__right">
                        <Link to="/signin" className="landing-button landing-button--simple">
                            {this.translate('page.body.landing.header.button2')}
                        </Link>
                        <Link to="/signup" className="landing-button">
                            {this.translate('page.body.landing.header.button3')}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    public renderMarketInfoBlock() {
        return (
            <div className="pg-landing-screen__market-info">
                <div className="pg-landing-screen__market-info__wrap">

                    <MarketsTable />
                </div>
            </div>
        );
    }

    public renderPlatformInfoBlock() {
        return (
            <div className="pg-landing-screen__platform-info">
                <div className="pg-landing-screen__platform-info__wrap">
                    <div className="pg-landing-screen__platform-info__wrap__item">
                        <span>12</span>
                        <span>{this.translate('page.body.landing.platformInfo.item.first.title')}</span>
                    </div>
                    <div className="pg-landing-screen__platform-info__wrap__item">
                        <span>$1.5M</span>
                        <span>{this.translate('page.body.landing.platformInfo.item.second.title')}</span>
                    </div>
                    <div className="pg-landing-screen__platform-info__wrap__item">
                        <span>{this.translate('page.body.landing.platformInfo.item.third.value')}</span>
                        <span>{this.translate('page.body.landing.platformInfo.item.third.title')}</span>
                    </div>
                </div>
            </div>
        );
    }

    public renderRegisterBlock() {
        return (
            <div className="pg-landing-screen__register">
                <div className="pg-landing-screen__register__wrap">
                    <div className="pg-landing-screen__register__wrap__item">
                        <h1>{this.translate('page.body.landing.register.item.title')}</h1>
                        <h2>{this.translate('page.body.landing.register.item.text')}</h2>
                        <Link to="/signup" className="landing-button">
                            {this.translate('page.body.landing.register.item.button')}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    public renderFeaturesBlock() {
        return (
            <div className="pg-landing-screen__features">
                <div className="pg-landing-screen__features__wrap">
                    <h1>{this.translate('page.body.landing.features.title')}</h1>
                    <div className="pg-landing-screen__features__content">
                        <div className="pg-landing-screen__features__content__row">
                            <div className="pg-landing-screen__features__content__row__item">
                                <img
                                    src={FeaturesExchangeIcon}
                                    alt={this.translate('page.body.landing.features.features.item1.title')}
                                />
                                <h2>{this.translate('page.body.landing.features.features.item1.title')}</h2>
                                <span>{this.translate('page.body.landing.features.features.item1.text')}</span>
                            </div>
                            <div className="pg-landing-screen__features__content__row__item">
                                <img
                                    src={FeaturesTypesIcon}
                                    alt={this.translate('page.body.landing.features.features.item2.title')}
                                />
                                <h2>{this.translate('page.body.landing.features.features.item2.title')}</h2>
                                <span>{this.translate('page.body.landing.features.features.item2.text')}</span>
                            </div>
                        </div>
                        <div className="pg-landing-screen__features__content__row">
                            <div className="pg-landing-screen__features__content__row__item">
                                <img
                                    src={FeaturesCustomizeIcon}
                                    alt={this.translate('page.body.landing.features.features.item3.title')}
                                />
                                <h2>{this.translate('page.body.landing.features.features.item3.title')}</h2>
                                <span>{this.translate('page.body.landing.features.features.item3.text')}</span>
                            </div>
                            <div className="pg-landing-screen__features__content__row__item">
                                <img
                                    src={FeaturesSecurityIcon}
                                    alt={this.translate('page.body.landing.features.features.item4.title')}
                                />
                                <h2>{this.translate('page.body.landing.features.features.item4.title')}</h2>
                                <span>{this.translate('page.body.landing.features.features.item4.text')}</span>
                            </div>
                        </div>
                        <div className="pg-landing-screen__features__content__row">
                            <div className="pg-landing-screen__features__content__row__item">
                                <img
                                    src={FeaturesCommunityIcon}
                                    alt={this.translate('page.body.landing.features.features.item5.title')}
                                />
                                <h2>{this.translate('page.body.landing.features.features.item5.title')}</h2>
                                <span>{this.translate('page.body.landing.features.features.item5.text')}</span>
                            </div>
                            <div className="pg-landing-screen__features__content__row__item">
                                <img
                                    src={FeaturesAPIIcon}
                                    alt={this.translate('page.body.landing.features.features.item6.title')}
                                />
                                <h2>{this.translate('page.body.landing.features.features.item6.title')}</h2>
                                <span>{this.translate('page.body.landing.features.features.item6.text')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    public renderTradeOnTheGoBlock() {
        return (
            <div className="pg-landing-screen__trade-on-the-go">
                <div className="pg-landing-screen__trade-on-the-go__wrap">
                    <div className="pg-landing-screen__trade-on-the-go__wrap__image"/>
                    <div className="pg-landing-screen__trade-on-the-go__wrap__content">
                        <h1>{this.translate('page.body.landing.tradeOnTheGo.item.title')}</h1>
                        <h2>{this.translate('page.body.landing.tradeOnTheGo.item.text1')}</h2>
                        <h2>{this.translate('page.body.landing.tradeOnTheGo.item.text2')}</h2>
                        <h2>{this.translate('page.body.landing.tradeOnTheGo.item.text3')}</h2>
                        <Link to="https://onelink.to/69qkm2" className="landing-button">
                            {this.translate('page.body.landing.tradeOnTheGo.item.button')}
                        </Link>
			    <table>
    <tbody><tr>
	    <td><a href="https://apps.apple.com/us/app/msamex-exchange/id1570427773"><img width="150" height="48" src="https://mesh.llc/xe/ios.png" /></a><a href="https://play.google.com/store/apps/details?id=com.mesh.msamexexchange"><img width="150" height="48" src="https://mesh.llc/xe/android.png" /></a></td></tr></tbody></table>
                    </div>
                </div>
            </div>
        );
    }

    public renderStartTradingBlock() {
        return (
            <div className="pg-landing-screen__start-trading">
                <div className="pg-landing-screen__start-trading__wrap">
                    <h1>{this.translate('page.body.landing.startTrading.title')}</h1>
                    <div className="pg-landing-screen__start-trading__wrap__content">
                        <Link to="/signup" className="landing-button">
                            {this.translate('page.body.landing.startTrading.button1')}
                        </Link>
                        <Link to="/trading/" className="landing-button landing-button--secondary">
                            {this.translate('page.body.landing.startTrading.button2')}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    public renderFooter() {
        return (
            <div className="pg-landing-screen__footer">
                <div className="pg-landing-screen__footer__wrap">
                    <div className="pg-landing-screen__footer__wrap__left" onClick={e => this.handleScrollTop()}>
						<img className="pg-landing-mainLogo" src={mainLogo}/>
                        <LogoIcon />
                    </div>
                    <div className="pg-landing-screen__footer__wrap__navigation">
                        <div className="pg-landing-screen__footer__wrap__navigation__col">
                            <Link to="/trading/">{this.translate('page.body.landing.footer.exchange')}</Link>
                            <Link to="/wallets">{this.translate('page.body.landing.footer.wallets')}</Link>
                            <a href="https://msamex.freshdesk.com/support/solutions/articles/150000001498-msamex-cryptocurrency-exchange-fees">{this.translate('page.body.landing.footer.fees')}</a>
                        </div>
                        <div className="pg-landing-screen__footer__wrap__navigation__col">
                            <a href="https://msamex.freshdesk.com/support/solutions/folders/150000031641">{this.translate('page.body.landing.footer.faq')}</a>
                            <a href="https://msamex.freshdesk.com/support/home">{this.translate('page.body.landing.footer.support')}</a>
                            <Link to="/">{this.translate('page.body.landing.footer.privacy')}</Link>
                        </div>
                        <div className="pg-landing-screen__footer__wrap__navigation__col">
                            <a href="https://msamex.freshdesk.com/support/solutions/articles/150000001510-about-msamex">{this.translate('page.body.landing.footer.about')}</a>
                            <Link to="/">{this.translate('page.body.landing.footer.community')}</Link>
                            <Link to="/">{this.translate('page.body.landing.footer.info')}</Link>
                        </div>
                    </div>
                    <div className="pg-landing-screen__footer__wrap__social">
                        <div className="pg-landing-screen__footer__wrap__social__row">
				<a href="https://t.me/msamexexchange"><img src={TelegramIcon} alt="Telegram" /></a>
				<a href="https://www.linkedin.com/company/msamex"><img src={LinkedInIcon} alt="LinkedIn" /></a>
				<a href="https://twitter.com/MsamexE"><img src={TwitterIcon} alt="Twitter" /></a>
				<a href="https://www.instagram.com/msamexexchange/"><img src={InstagramIcon} alt="Instagram" /></a>
                        </div>
                        <div className="pg-landing-screen__footer__wrap__social__row">
                            <a href="https://www.reddit.com/user/msamex"><img src={RedditIcon} alt="Reddit" /></a>
				<a href="https://www.facebook.com/msamexexchange"><img src={FacebookIcon} alt="Facebook" /></a>
				<a href="https://medium.com/msamex"><img src={MediumIcon} alt="MediumIcon" /></a>
                            <img src={CoinMarketIcon} alt="CoinMarket" />
                        </div>
                    </div>
                </div>
                <span className="pg-landing-screen__footer__rights">{this.translate('page.body.landing.footer.rights')}</span>
            </div>
        );
    }

    public render() {
        return (
            <div className="pg-landing-screen">
                {this.renderHeader()}
				 <Swiper spaceBetween={8} navigation={true} pagination={{
					  "clickable": false
					}} className="mySwiper">
				  <SwiperSlide><img src="https://mesh.llc/xe/samslide00.png" /></SwiperSlide><SwiperSlide><img src="https://mesh.llc/xe/samslide01.png" /></SwiperSlide><SwiperSlide><img src="https://mesh.llc/xe/samslide2.png" /></SwiperSlide><SwiperSlide><img src="https://mesh.llc/xe/samslide1.png" /></SwiperSlide><SwiperSlide><img src="https://mesh.llc/xe/samslide0.png" /></SwiperSlide>
				  </Swiper>
                {this.renderMarketInfoBlock()}
                {this.renderPlatformInfoBlock()}
                {this.renderRegisterBlock()}
                {this.renderFeaturesBlock()}
                {this.renderTradeOnTheGoBlock()}
                {this.renderStartTradingBlock()}
                {this.renderFooter()}
            </div>
        );
    }

    private handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    private translate = (key: string) => this.props.intl.formatMessage({id: key});
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    isLoggedIn: selectUserLoggedIn(state),
    colorTheme: selectCurrentColorTheme(state),
});

export const LandingScreen = compose(
    injectIntl,
    withRouter,
    connect(mapStateToProps, null),
)(Landing) as React.ComponentClass;
