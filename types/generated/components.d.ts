import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutButton extends Schema.Component {
  collectionName: 'components_about_buttons';
  info: {
    displayName: 'button';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    icon_url: Attribute.String;
  };
}

export interface AboutHeader extends Schema.Component {
  collectionName: 'components_about_headers';
  info: {
    displayName: 'header';
    icon: 'cube';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    story: Attribute.Component<'about.story'>;
    management: Attribute.Component<'about.management', true>;
    bg_url: Attribute.String;
    Advisor: Attribute.Component<'about.management'>;
    alliance: Attribute.Component<'about.strategicalliance'>;
    partnership: Attribute.Component<'about.partnership'>;
    recognition: Attribute.Component<'about.recognition'>;
  };
}

export interface AboutManagement extends Schema.Component {
  collectionName: 'components_about_managements';
  info: {
    displayName: 'Management';
    icon: 'alien';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    description: Attribute.RichText;
    icon: Attribute.String;
    image_url: Attribute.String;
    title: Attribute.String;
    linkedin_url: Attribute.String;
  };
}

export interface AboutPartnership extends Schema.Component {
  collectionName: 'components_about_partnerships';
  info: {
    displayName: 'Partnership';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    color_title: Attribute.String;
    description: Attribute.RichText;
    image_url: Attribute.String;
  };
}

export interface AboutRecognition extends Schema.Component {
  collectionName: 'components_about_recognitions';
  info: {
    displayName: 'Recognition';
    icon: 'briefcase';
  };
  attributes: {
    title: Attribute.String;
    recognitions: Attribute.Relation<
      'about.recognition',
      'oneToMany',
      'api::recognition.recognition'
    >;
  };
}

export interface AboutStory extends Schema.Component {
  collectionName: 'components_about_stories';
  info: {
    displayName: 'story';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    image_url: Attribute.String;
    play_btn_url: Attribute.String;
  };
}

export interface AboutStrategicalliance extends Schema.Component {
  collectionName: 'components_about_strategicalliances';
  info: {
    displayName: 'Strategicalliance';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    strategicalliances: Attribute.Relation<
      'about.strategicalliance',
      'oneToMany',
      'api::strategicalliance.strategicalliance'
    >;
  };
}

export interface BlogAllBlog extends Schema.Component {
  collectionName: 'components_blog_all_blogs';
  info: {
    displayName: 'All_blog';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    all_blog: Attribute.Component<'blog.latest-blog'>;
  };
}

export interface BlogBlogDetail extends Schema.Component {
  collectionName: 'components_blog_blog_details';
  info: {
    displayName: 'blog_detail';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface BlogLatestBlog extends Schema.Component {
  collectionName: 'components_blog_latest_blogs';
  info: {
    displayName: 'latest_blog';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    latest_blogs: Attribute.Relation<
      'blog.latest-blog',
      'oneToMany',
      'api::latest-blog.latest-blog'
    >;
    right_title: Attribute.String;
  };
}

export interface FooterLeftFooterLink extends Schema.Component {
  collectionName: 'components_footer_left_footer_links';
  info: {
    displayName: 'left_footer_link';
    description: '';
  };
  attributes: {
    menu: Attribute.String;
    url: Attribute.String;
  };
}

export interface HomeBoxProduct extends Schema.Component {
  collectionName: 'components_home_box_products';
  info: {
    displayName: 'box_product';
    icon: 'archive';
    description: '';
  };
  attributes: {
    logo_url: Attribute.String;
    image_url: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'home.button'>;
    text_logo: Attribute.String;
  };
}

export interface HomeButton extends Schema.Component {
  collectionName: 'components_home_buttons';
  info: {
    displayName: 'Button';
    icon: 'apps';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    redirect_url: Attribute.String;
  };
}

export interface HomeCareerPathway extends Schema.Component {
  collectionName: 'components_home_career_pathways';
  info: {
    displayName: 'Career_pathway';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    bg_url: Attribute.String;
    link: Attribute.Component<'home.button', true>;
    title: Attribute.String;
    certificate_url: Attribute.String;
    certified_name: Attribute.String;
    career_right: Attribute.Component<'home.career-right'>;
  };
}

export interface HomeCareerRight extends Schema.Component {
  collectionName: 'components_home_career_rights';
  info: {
    displayName: 'career_right';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    partner_title: Attribute.String;
    partner_url: Attribute.String;
    content: Attribute.Text;
  };
}

export interface HomeCityDropdown extends Schema.Component {
  collectionName: 'components_home_city_dropdowns';
  info: {
    displayName: 'City_dropdown';
    icon: 'layer';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface HomeContact extends Schema.Component {
  collectionName: 'components_home_contacts';
  info: {
    displayName: 'contact';
    icon: 'attachment';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
  };
}

export interface HomeHomeHeader extends Schema.Component {
  collectionName: 'components_home_home_headers';
  info: {
    displayName: 'home_header';
    icon: 'database';
    description: '';
  };
  attributes: {
    bg_image_url: Attribute.String;
  };
}

export interface HomeLinks extends Schema.Component {
  collectionName: 'components_home_links';
  info: {
    displayName: 'links';
    icon: 'attachment';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface HomePartnerContact extends Schema.Component {
  collectionName: 'components_home_partner_contacts';
  info: {
    displayName: 'Partner_contact';
    icon: 'book';
    description: '';
  };
  attributes: {
    image_url: Attribute.String;
    partner_contact: Attribute.Component<'home.contact', true>;
    product_type: Attribute.Component<'home.links', true>;
    cityname: Attribute.Component<'home.city-dropdown', true>;
  };
}

export interface HomeProductLeft extends Schema.Component {
  collectionName: 'components_home_product_lefts';
  info: {
    displayName: 'product_left';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    product_button: Attribute.Component<'home.button'>;
    service_box: Attribute.Component<'home.service-home', true>;
    right_bg_url: Attribute.String;
  };
}

export interface HomeServiceHome extends Schema.Component {
  collectionName: 'components_home_service_homes';
  info: {
    displayName: 'service_home';
    icon: 'brush';
    description: '';
  };
  attributes: {
    image_url: Attribute.String;
    redirect_url: Attribute.String;
    service_homes: Attribute.Relation<
      'home.service-home',
      'oneToMany',
      'api::service-home.service-home'
    >;
  };
}

export interface HomeServiceItOt extends Schema.Component {
  collectionName: 'components_home_service_it_ots';
  info: {
    displayName: 'service_it_ot';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface HomeWhizrangeSection extends Schema.Component {
  collectionName: 'components_home_whizrange_sections';
  info: {
    displayName: 'whizrange-section';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    logo_url: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'home.button'>;
  };
}

export interface IndustryButton extends Schema.Component {
  collectionName: 'components_industry_buttons';
  info: {
    displayName: 'button';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface IndustryIndustryLeftTab extends Schema.Component {
  collectionName: 'components_industry_industry_left_tabs';
  info: {
    displayName: 'industry_left_tab';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    industry_lefts: Attribute.Relation<
      'industry.industry-left-tab',
      'oneToMany',
      'api::industry-left.industry-left'
    >;
  };
}

export interface IndustryIndustryRightTab extends Schema.Component {
  collectionName: 'components_industry_industry_right_tabs';
  info: {
    displayName: 'industry_right_tab';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    industry_rights: Attribute.Relation<
      'industry.industry-right-tab',
      'oneToMany',
      'api::industry-right.industry-right'
    >;
  };
}

export interface IndustrySectionIntro extends Schema.Component {
  collectionName: 'components_industry_section_intros';
  info: {
    displayName: 'section_intro';
    description: '';
  };
  attributes: {
    left_image_url: Attribute.String;
    title: Attribute.String;
    content: Attribute.RichText;
    play_btn_url: Attribute.String;
  };
}

export interface InvestorRelationComponentYear extends Schema.Component {
  collectionName: 'components_investor_relation_component_years';
  info: {
    displayName: 'component_year';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    content: Attribute.RichText;
  };
}

export interface InvestorRelationFinancialYearPerformance
  extends Schema.Component {
  collectionName: 'components_investor_relation_financial_year_performances';
  info: {
    displayName: 'Financial_year_performance';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface InvestorRelationFinancialYear extends Schema.Component {
  collectionName: 'components_investor_relation_financial_years';
  info: {
    displayName: 'Financial_Year';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    investors: Attribute.Relation<
      'investor-relation.financial-year',
      'oneToMany',
      'api::investor.investor'
    >;
  };
}

export interface InvestorRelationInvestorShareholder extends Schema.Component {
  collectionName: 'components_investor_relation_investor_shareholders';
  info: {
    displayName: 'investor_shareholder';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    small_title: Attribute.Text;
    image_url: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface NavbarDropdown extends Schema.Component {
  collectionName: 'components_navbar_dropdowns';
  info: {
    displayName: 'dropdown';
    icon: 'arrowDown';
  };
  attributes: {
    label: Attribute.String;
    sections: Attribute.Relation<
      'navbar.dropdown',
      'oneToMany',
      'api::section.section'
    >;
  };
}

export interface NavbarMenu extends Schema.Component {
  collectionName: 'components_navbar_menus';
  info: {
    displayName: 'menu';
    icon: 'link';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    icon: Attribute.String;
    label: Attribute.String;
    icon_url: Attribute.String;
  };
}

export interface NavbarSingleDropdown extends Schema.Component {
  collectionName: 'components_navbar_single_dropdowns';
  info: {
    displayName: 'Single_dropdown';
    icon: 'apps';
    description: '';
  };
  attributes: {
    single_sections: Attribute.Relation<
      'navbar.single-dropdown',
      'oneToMany',
      'api::single-section.single-section'
    >;
    label: Attribute.String;
  };
}

export interface PartnerPartnerContent extends Schema.Component {
  collectionName: 'components_partner_partner_contents';
  info: {
    displayName: 'partner_content';
    icon: 'bulletList';
  };
  attributes: {
    logo_url: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface RansomewareInnerContent extends Schema.Component {
  collectionName: 'components_ransomeware_inner_contents';
  info: {
    displayName: 'inner_content';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface RansomewareRansomewareContentHeading extends Schema.Component {
  collectionName: 'components_ransomeware_ransomeware_content_headings';
  info: {
    displayName: 'ransomeware_content_heading';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface RansomewareRansomewareHeadingContent extends Schema.Component {
  collectionName: 'components_ransomeware_ransomeware_heading_contents';
  info: {
    displayName: 'ransomeware_heading_content';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface RansomewareRansomewareIntroInner extends Schema.Component {
  collectionName: 'components_ransomeware_ransomeware_intro_inners';
  info: {
    displayName: 'ransomeware_intro_inner';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface RansomewareRansomewareIntro extends Schema.Component {
  collectionName: 'components_ransomeware_ransomeware_intros';
  info: {
    displayName: 'ransomeware_intro';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    ransomeware_content_inner: Attribute.Component<
      'ransomeware.ransomeware-intro-inner',
      true
    >;
  };
}

export interface ServicesIntro extends Schema.Component {
  collectionName: 'components_services_intros';
  info: {
    displayName: 'intro';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    image_url: Attribute.String;
    play_btn_url: Attribute.String;
  };
}

export interface ServicesIotAssessment extends Schema.Component {
  collectionName: 'components_services_iot_assessments';
  info: {
    displayName: 'iot_assessment';
    icon: 'bulletList';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface ServicesIotSecurity extends Schema.Component {
  collectionName: 'components_services_iot_securities';
  info: {
    displayName: 'iot_security';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    title_left: Attribute.String;
    description: Attribute.RichText;
    service_links: Attribute.Relation<
      'services.iot-security',
      'oneToMany',
      'api::service-link.service-link'
    >;
    title_right: Attribute.String;
    image_url: Attribute.String;
  };
}

export interface ServicesPTesting extends Schema.Component {
  collectionName: 'components_services_p_testings';
  info: {
    displayName: 'p_testing';
    icon: 'attachment';
  };
  attributes: {
    box_title: Attribute.String;
    description: Attribute.Text;
    image_url: Attribute.String;
  };
}

export interface ServicesTimeline extends Schema.Component {
  collectionName: 'components_services_timelines';
  info: {
    displayName: 'timeline';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    timelines: Attribute.Relation<
      'services.timeline',
      'oneToMany',
      'api::timeline.timeline'
    >;
  };
}

export interface SolutionHids2 extends Schema.Component {
  collectionName: 'components_solution_hids_2s';
  info: {
    displayName: 'Hids_2';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    bg_image_url: Attribute.String;
    button: Attribute.Component<'home.button'>;
    about_cybers: Attribute.Relation<
      'solution.hids-2',
      'oneToMany',
      'api::about-cyber.about-cyber'
    >;
    hids_features: Attribute.Relation<
      'solution.hids-2',
      'oneToMany',
      'api::hids-feature.hids-feature'
    >;
  };
}

export interface SolutionHidsFeauter extends Schema.Component {
  collectionName: 'components_solution_hids_feauters';
  info: {
    displayName: 'hids_feauter';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    image_url: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface SolutionHids extends Schema.Component {
  collectionName: 'components_solution_hids';
  info: {
    displayName: 'HIDS';
    icon: 'bulletList';
  };
  attributes: {
    bg_url: Attribute.String;
    small_title: Attribute.String;
    big_title: Attribute.String;
    hids_section: Attribute.Component<'solution.hids-2'>;
  };
}

export interface SolutionSolutionCard extends Schema.Component {
  collectionName: 'components_solution_solution_cards';
  info: {
    displayName: 'solution_card';
    icon: 'bulletList';
  };
  attributes: {
    logo_url: Attribute.String;
    label: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface SolutionSolutionHeader extends Schema.Component {
  collectionName: 'components_solution_solution_headers';
  info: {
    displayName: 'Trace';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    bg_url: Attribute.String;
    logo_url: Attribute.String;
    small_label: Attribute.String;
    big_title: Attribute.String;
    description: Attribute.Text;
    threat: Attribute.Component<'solution.trace-component'>;
  };
}

export interface SolutionSolutionPage extends Schema.Component {
  collectionName: 'components_solution_solution_pages';
  info: {
    displayName: 'solution_page';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SolutionTraceComponent extends Schema.Component {
  collectionName: 'components_solution_trace_components';
  info: {
    displayName: 'Trace_component';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    big_title: Attribute.String;
    small_title: Attribute.String;
    label: Attribute.String;
    bg_url: Attribute.String;
    card: Attribute.Component<'solution.solution-card', true>;
    traces: Attribute.Relation<
      'solution.trace-component',
      'oneToMany',
      'api::trace.trace'
    >;
    trace_benefits: Attribute.Relation<
      'solution.trace-component',
      'oneToMany',
      'api::trace-benefit.trace-benefit'
    >;
    solution_cases: Attribute.Relation<
      'solution.trace-component',
      'oneToMany',
      'api::solution-case.solution-case'
    >;
    description: Attribute.RichText;
  };
}

export interface SolutionTraceFeatures extends Schema.Component {
  collectionName: 'components_solution_trace_features';
  info: {
    displayName: 'trace_Features';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon_url: Attribute.String;
  };
}

export interface SolutionUseCase extends Schema.Component {
  collectionName: 'components_solution_use_cases';
  info: {
    displayName: 'use_case';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SolutionZeroHack extends Schema.Component {
  collectionName: 'components_solution_zero_hacks';
  info: {
    displayName: 'ZeroHack';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    bg_url: Attribute.String;
    logo_url: Attribute.String;
    small_title: Attribute.String;
    big_title: Attribute.String;
    description: Attribute.Text;
    bg_image_url: Attribute.Component<'solution.zerohack-component'>;
  };
}

export interface SolutionZerohackComponent extends Schema.Component {
  collectionName: 'components_solution_zerohack_components';
  info: {
    displayName: 'whizrange_component';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    big_title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'home.button', true>;
    card: Attribute.Component<'solution.solution-card', true>;
    solution_cases: Attribute.Relation<
      'solution.zerohack-component',
      'oneToMany',
      'api::solution-case.solution-case'
    >;
    about_cybers: Attribute.Relation<
      'solution.zerohack-component',
      'oneToMany',
      'api::about-cyber.about-cyber'
    >;
  };
}

export interface TrainingAboutLinkCyber extends Schema.Component {
  collectionName: 'components_training_about_link_cybers';
  info: {
    displayName: 'about_link_cyber';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface TrainingBtog extends Schema.Component {
  collectionName: 'components_training_btogs';
  info: {
    displayName: 'Btog';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    right_bg_url: Attribute.String;
    image_left_url: Attribute.String;
    small_title: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    btogs: Attribute.Relation<'training.btog', 'oneToMany', 'api::btog.btog'>;
    about_cybers: Attribute.Relation<
      'training.btog',
      'oneToMany',
      'api::about-cyber.about-cyber'
    >;
    solution_cases: Attribute.Relation<
      'training.btog',
      'oneToMany',
      'api::solution-case.solution-case'
    >;
  };
}

export interface TrainingModuleCyber extends Schema.Component {
  collectionName: 'components_training_module_cybers';
  info: {
    displayName: 'module_cyber';
    icon: 'bulletList';
  };
  attributes: {
    icon_url: Attribute.String;
    label: Attribute.String;
    description: Attribute.String;
  };
}

export interface TrainingProgramPrice extends Schema.Component {
  collectionName: 'components_training_program_prices';
  info: {
    displayName: 'program_price';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.String;
    price_label: Attribute.String;
    price_title: Attribute.String;
    button_label: Attribute.String;
    price: Attribute.String;
  };
}

export interface TrainingTrainingProgram extends Schema.Component {
  collectionName: 'components_training_training_programs';
  info: {
    displayName: 'training_list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    right_bg_url: Attribute.String;
    title: Attribute.String;
    small_title: Attribute.String;
    description: Attribute.Text;
    cyber_gurus: Attribute.Relation<
      'training.training-program',
      'oneToMany',
      'api::cyber-guru.cyber-guru'
    >;
    about_cybers: Attribute.Relation<
      'training.training-program',
      'oneToMany',
      'api::about-cyber.about-cyber'
    >;
    cyber_modules: Attribute.Relation<
      'training.training-program',
      'oneToMany',
      'api::cyber-module.cyber-module'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'about.button': AboutButton;
      'about.header': AboutHeader;
      'about.management': AboutManagement;
      'about.partnership': AboutPartnership;
      'about.recognition': AboutRecognition;
      'about.story': AboutStory;
      'about.strategicalliance': AboutStrategicalliance;
      'blog.all-blog': BlogAllBlog;
      'blog.blog-detail': BlogBlogDetail;
      'blog.latest-blog': BlogLatestBlog;
      'footer.left-footer-link': FooterLeftFooterLink;
      'home.box-product': HomeBoxProduct;
      'home.button': HomeButton;
      'home.career-pathway': HomeCareerPathway;
      'home.career-right': HomeCareerRight;
      'home.city-dropdown': HomeCityDropdown;
      'home.contact': HomeContact;
      'home.home-header': HomeHomeHeader;
      'home.links': HomeLinks;
      'home.partner-contact': HomePartnerContact;
      'home.product-left': HomeProductLeft;
      'home.service-home': HomeServiceHome;
      'home.service-it-ot': HomeServiceItOt;
      'home.whizrange-section': HomeWhizrangeSection;
      'industry.button': IndustryButton;
      'industry.industry-left-tab': IndustryIndustryLeftTab;
      'industry.industry-right-tab': IndustryIndustryRightTab;
      'industry.section-intro': IndustrySectionIntro;
      'investor-relation.component-year': InvestorRelationComponentYear;
      'investor-relation.financial-year-performance': InvestorRelationFinancialYearPerformance;
      'investor-relation.financial-year': InvestorRelationFinancialYear;
      'investor-relation.investor-shareholder': InvestorRelationInvestorShareholder;
      'navbar.dropdown': NavbarDropdown;
      'navbar.menu': NavbarMenu;
      'navbar.single-dropdown': NavbarSingleDropdown;
      'partner.partner-content': PartnerPartnerContent;
      'ransomeware.inner-content': RansomewareInnerContent;
      'ransomeware.ransomeware-content-heading': RansomewareRansomewareContentHeading;
      'ransomeware.ransomeware-heading-content': RansomewareRansomewareHeadingContent;
      'ransomeware.ransomeware-intro-inner': RansomewareRansomewareIntroInner;
      'ransomeware.ransomeware-intro': RansomewareRansomewareIntro;
      'services.intro': ServicesIntro;
      'services.iot-assessment': ServicesIotAssessment;
      'services.iot-security': ServicesIotSecurity;
      'services.p-testing': ServicesPTesting;
      'services.timeline': ServicesTimeline;
      'solution.hids-2': SolutionHids2;
      'solution.hids-feauter': SolutionHidsFeauter;
      'solution.hids': SolutionHids;
      'solution.solution-card': SolutionSolutionCard;
      'solution.solution-header': SolutionSolutionHeader;
      'solution.solution-page': SolutionSolutionPage;
      'solution.trace-component': SolutionTraceComponent;
      'solution.trace-features': SolutionTraceFeatures;
      'solution.use-case': SolutionUseCase;
      'solution.zero-hack': SolutionZeroHack;
      'solution.zerohack-component': SolutionZerohackComponent;
      'training.about-link-cyber': TrainingAboutLinkCyber;
      'training.btog': TrainingBtog;
      'training.module-cyber': TrainingModuleCyber;
      'training.program-price': TrainingProgramPrice;
      'training.training-program': TrainingTrainingProgram;
    }
  }
}
