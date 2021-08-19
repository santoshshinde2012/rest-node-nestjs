'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-boilerolate documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/contribution.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-18f7976009414f8ea168bed2584b9ce7"' : 'data-target="#xs-additional-page-18f7976009414f8ea168bed2584b9ce7"' }>
                                                <span class="link-name">Contribution</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-18f7976009414f8ea168bed2584b9ce7"' : 'id="xs-additional-page-18f7976009414f8ea168bed2584b9ce7"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/contribution/bug-reports.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Bug Reports</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/contribution/features-requests.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Features Requests</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/contribution/pull-requests.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Pull Requests</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/modules.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-33639748532720c1f41585af992c3929"' : 'data-target="#xs-additional-page-33639748532720c1f41585af992c3929"' }>
                                                <span class="link-name">Modules</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-33639748532720c1f41585af992c3929"' : 'id="xs-additional-page-33639748532720c1f41585af992c3929"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/modules/logger.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Logger</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/modules/request-response.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Request Response</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/modules/mailer.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Mailer</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/modules/database.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Database</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/modules/pattern.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Pattern</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/miscellaneous.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-df34f22933f4c073175027adaf34299b"' : 'data-target="#xs-additional-page-df34f22933f4c073175027adaf34299b"' }>
                                                <span class="link-name">Miscellaneous</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-df34f22933f4c073175027adaf34299b"' : 'id="xs-additional-page-df34f22933f4c073175027adaf34299b"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/miscellaneous/git-commits.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Git commits</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/miscellaneous/known-issues.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Known Issues</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/miscellaneous/clean-docker-images.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Clean Docker Images</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/miscellaneous/installation-pretteri,-husky-&amp;-lint.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Installation Pretteri, Husky &amp; Lint</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/trainings.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-6f7847defecef90feeb32d3d75bea4c1"' : 'data-target="#xs-additional-page-6f7847defecef90feeb32d3d75bea4c1"' }>
                                                <span class="link-name">Trainings</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-6f7847defecef90feeb32d3d75bea4c1"' : 'id="xs-additional-page-6f7847defecef90feeb32d3d75bea4c1"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/trainings/node-js-for-beginners.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Node JS for Beginners</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/trainings/nest-js-for-beginners.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Nest JS for Beginners</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/trainings/git-for-beginners.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Git for Beginners</a>
                                            </li>
                                        </ul>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-638d810cd3178e2d3111baf02188e071"' : 'data-target="#xs-controllers-links-module-AppModule-638d810cd3178e2d3111baf02188e071"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-638d810cd3178e2d3111baf02188e071"' :
                                            'id="xs-controllers-links-module-AppModule-638d810cd3178e2d3111baf02188e071"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-638d810cd3178e2d3111baf02188e071"' : 'data-target="#xs-injectables-links-module-AppModule-638d810cd3178e2d3111baf02188e071"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-638d810cd3178e2d3111baf02188e071"' :
                                        'id="xs-injectables-links-module-AppModule-638d810cd3178e2d3111baf02188e071"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-0999389fe4f2d96ae4e1abc947520da8"' : 'data-target="#xs-controllers-links-module-UsersModule-0999389fe4f2d96ae4e1abc947520da8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-0999389fe4f2d96ae4e1abc947520da8"' :
                                            'id="xs-controllers-links-module-UsersModule-0999389fe4f2d96ae4e1abc947520da8"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-0999389fe4f2d96ae4e1abc947520da8"' : 'data-target="#xs-injectables-links-module-UsersModule-0999389fe4f2d96ae4e1abc947520da8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-0999389fe4f2d96ae4e1abc947520da8"' :
                                        'id="xs-injectables-links-module-UsersModule-0999389fe4f2d96ae4e1abc947520da8"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppLogger.html" data-type="entity-link" >AppLogger</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserDbRepository.html" data-type="entity-link" >UserDbRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserInMemoryRepository.html" data-type="entity-link" >UserInMemoryRepository</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RequestGuard.html" data-type="entity-link" >RequestGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Request.html" data-type="entity-link" >Request</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseType.html" data-type="entity-link" >ResponseType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserRepository.html" data-type="entity-link" >UserRepository</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});