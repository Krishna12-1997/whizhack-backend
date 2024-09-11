import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutAbout extends Schema.SingleType {
  collectionName: 'abouts';
  info: {
    singularName: 'about';
    pluralName: 'abouts';
    displayName: 'About';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Attribute.Component<'about.header'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about.about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutCyberAboutCyber extends Schema.CollectionType {
  collectionName: 'about_cybers';
  info: {
    singularName: 'about-cyber';
    pluralName: 'about-cybers';
    displayName: 'About_cyber';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    color_title: Attribute.String;
    cyber_link: Attribute.Component<'training.about-link-cyber', true>;
    description: Attribute.RichText;
    bg_image_url: Attribute.String;
    play_btn_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-cyber.about-cyber',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-cyber.about-cyber',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.SingleType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'Blog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    bg_url: Attribute.String;
    blog: Attribute.Component<'blog.latest-blog'>;
    all_blog: Attribute.Component<'blog.all-blog'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBtogBtog extends Schema.CollectionType {
  collectionName: 'btogs';
  info: {
    singularName: 'btog';
    pluralName: 'btogs';
    displayName: 'Btog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bg_url: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    btog_card: Attribute.Component<'solution.solution-card', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::btog.btog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::btog.btog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCareerPathwayCareerPathway extends Schema.SingleType {
  collectionName: 'career_pathways';
  info: {
    singularName: 'career-pathway';
    pluralName: 'career-pathways';
    displayName: 'Career_pathway';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bg_url: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    career_path_video: Attribute.Component<'career.career-video', true>;
    career_programs: Attribute.Relation<
      'api::career-pathway.career-pathway',
      'oneToMany',
      'api::career-program.career-program'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::career-pathway.career-pathway',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::career-pathway.career-pathway',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareerProgramCareerProgram extends Schema.CollectionType {
  collectionName: 'career_programs';
  info: {
    singularName: 'career-program';
    pluralName: 'career-programs';
    displayName: 'Career_program';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    small_title: Attribute.Text;
    description: Attribute.Text;
    duration: Attribute.Component<'career.career-duration'>;
    module: Attribute.Component<'career.career-module', true>;
    image_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::career-program.career-program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::career-program.career-program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactDetailContactDetail extends Schema.CollectionType {
  collectionName: 'contact_details';
  info: {
    singularName: 'contact-detail';
    pluralName: 'contact-details';
    displayName: 'Contact_detail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    contact: Attribute.String;
    email: Attribute.Email;
    message: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-detail.contact-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-detail.contact-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactFormContactForm extends Schema.SingleType {
  collectionName: 'contact_forms';
  info: {
    singularName: 'contact-form';
    pluralName: 'contact-forms';
    displayName: 'Contact_form';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    bg_url: Attribute.String;
    address: Attribute.Text;
    email: Attribute.Email;
    contact: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-form.contact-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-form.contact-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCyberGuruCyberGuru extends Schema.CollectionType {
  collectionName: 'cyber_gurus';
  info: {
    singularName: 'cyber-guru';
    pluralName: 'cyber-gurus';
    displayName: 'cyber_guru';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bg_url: Attribute.String;
    small_title: Attribute.String;
    title: Attribute.String;
    price: Attribute.Component<'training.program-price', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cyber-guru.cyber-guru',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cyber-guru.cyber-guru',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCyberModuleCyberModule extends Schema.CollectionType {
  collectionName: 'cyber_modules';
  info: {
    singularName: 'cyber-module';
    pluralName: 'cyber-modules';
    displayName: 'Cyber_module';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    cyber_module: Attribute.Component<'training.module-cyber', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cyber-module.cyber-module',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cyber-module.cyber-module',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address: Attribute.Text;
    email: Attribute.Email;
    number: Attribute.BigInteger;
    link: Attribute.String;
    left_footer: Attribute.Component<'footer.left-footer-link', true>;
    copywrite_text: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterContactEmailFooterContactEmail
  extends Schema.CollectionType {
  collectionName: 'footer_contact_emails';
  info: {
    singularName: 'footer-contact-email';
    pluralName: 'footer-contact-emails';
    displayName: 'footer_contact_email';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    email: Attribute.Email;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer-contact-email.footer-contact-email',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer-contact-email.footer-contact-email',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHidsFeatureHidsFeature extends Schema.CollectionType {
  collectionName: 'hids_features';
  info: {
    singularName: 'hids-feature';
    pluralName: 'hids-features';
    displayName: 'Hids_feature';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    feature_hids: Attribute.Component<'solution.hids-feauter', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hids-feature.hids-feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hids-feature.hids-feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeHome extends Schema.SingleType {
  collectionName: 'homes';
  info: {
    singularName: 'home';
    pluralName: 'homes';
    displayName: 'Home';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    logo_url: Attribute.String;
    link: Attribute.Component<'home.links', true>;
    images: Attribute.Component<'home.home-header', true>;
    box: Attribute.Component<'home.box-product', true>;
    contact: Attribute.Component<'home.partner-contact'>;
    bg_url: Attribute.String;
    whizrangeproduct: Attribute.Component<'home.whizrange-section', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiHomeProductHomeProduct extends Schema.CollectionType {
  collectionName: 'home_products';
  info: {
    singularName: 'home-product';
    pluralName: 'home-products';
    displayName: 'Home_product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    products: Attribute.Component<'home.box-product', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-product.home-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-product.home-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIndustryIndustry extends Schema.SingleType {
  collectionName: 'industries';
  info: {
    singularName: 'industry';
    pluralName: 'industries';
    displayName: 'Industry';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    bg_url: Attribute.String;
    section: Attribute.Component<'industry.section-intro'>;
    industry_left: Attribute.Component<'industry.industry-left-tab'>;
    content: Attribute.RichText;
    industry_right: Attribute.Component<'industry.industry-right-tab'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::industry.industry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::industry.industry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIndustryLeftIndustryLeft extends Schema.CollectionType {
  collectionName: 'industry_lefts';
  info: {
    singularName: 'industry-left';
    pluralName: 'industry-lefts';
    displayName: 'Industry_left';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::industry-left.industry-left',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::industry-left.industry-left',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIndustryRightIndustryRight extends Schema.CollectionType {
  collectionName: 'industry_rights';
  info: {
    singularName: 'industry-right';
    pluralName: 'industry-rights';
    displayName: 'Industry_right';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'industry.button'>;
    Industry_product_type: Attribute.Enumeration<
      ['Finance', 'Banking', 'SME', 'Defense']
    > &
      Attribute.DefaultTo<'Finance'>;
    redirect_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::industry-right.industry-right',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::industry-right.industry-right',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInstitutionContactInstitutionContact
  extends Schema.CollectionType {
  collectionName: 'institution_contacts';
  info: {
    singularName: 'institution-contact';
    pluralName: 'institution-contacts';
    displayName: 'Institution_contact';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    institutiontype: Attribute.String;
    institutionname: Attribute.String;
    personname: Attribute.String;
    personnumber: Attribute.BigInteger;
    Email: Attribute.Email;
    CityName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::institution-contact.institution-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::institution-contact.institution-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInvestorInvestor extends Schema.CollectionType {
  collectionName: 'investors';
  info: {
    singularName: 'investor';
    pluralName: 'investors';
    displayName: 'investor';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    investor_shareholder_content: Attribute.Component<
      'investor-relation.investor-shareholder',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::investor.investor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::investor.investor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInvestorRelationInvestorRelation extends Schema.SingleType {
  collectionName: 'investor_relations';
  info: {
    singularName: 'investor-relation';
    pluralName: 'investor-relations';
    displayName: 'Investor_relation';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    year: Attribute.Component<'investor-relation.financial-year'>;
    bg_url: Attribute.String;
    financial_performance: Attribute.Component<
      'investor-relation.financial-year-performance',
      true
    >;
    advisorpartner: Attribute.Component<
      'investor-relation.partner-advisor',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::investor-relation.investor-relation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::investor-relation.investor-relation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiJobApplicationJobApplication extends Schema.CollectionType {
  collectionName: 'job_applications';
  info: {
    singularName: 'job-application';
    pluralName: 'job-applications';
    displayName: 'JobApplication';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    fullName: Attribute.String;
    email: Attribute.Email;
    MobileNumber: Attribute.String;
    linkdinUrl: Attribute.String;
    Resume: Attribute.Media;
    coverLetter: Attribute.Media;
    appliedFor: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::job-application.job-application',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::job-application.job-application',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLatestBlogLatestBlog extends Schema.CollectionType {
  collectionName: 'latest_blogs';
  info: {
    singularName: 'latest-blog';
    pluralName: 'latest-blogs';
    displayName: 'Latest_blog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    image_url: Attribute.String;
    title: Attribute.Text;
    description: Attribute.RichText;
    blog_button: Attribute.Component<'industry.button'>;
    small_label: Attribute.String;
    tag: Attribute.String;
    Single_blog_details: Attribute.Component<'blog.blog-detail', true>;
    blog_upload_date: Attribute.Date;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::latest-blog.latest-blog',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::latest-blog.latest-blog',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMediaCoverageMediaCoverage extends Schema.SingleType {
  collectionName: 'media_coverages';
  info: {
    singularName: 'media-coverage';
    pluralName: 'media-coverages';
    displayName: 'mediaCoverage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    media_content: Attribute.Component<'media.media', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::media-coverage.media-coverage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::media-coverage.media-coverage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPartnerPartner extends Schema.SingleType {
  collectionName: 'partners';
  info: {
    singularName: 'partner';
    pluralName: 'partners';
    displayName: 'Partner';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    bg_url: Attribute.String;
    partner_contents: Attribute.Relation<
      'api::partner.partner',
      'oneToMany',
      'api::partner-content.partner-content'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::partner.partner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::partner.partner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPartnerContentPartnerContent extends Schema.CollectionType {
  collectionName: 'partner_contents';
  info: {
    singularName: 'partner-content';
    pluralName: 'partner-contents';
    displayName: 'Partner_content';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    partner_card: Attribute.Component<'partner.partner-content', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::partner-content.partner-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::partner-content.partner-content',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivacyPolicyPrivacyPolicy extends Schema.SingleType {
  collectionName: 'privacy_policies';
  info: {
    singularName: 'privacy-policy';
    pluralName: 'privacy-policies';
    displayName: 'Privacy_policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    bg_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductContactProductContact extends Schema.CollectionType {
  collectionName: 'product_contacts';
  info: {
    singularName: 'product-contact';
    pluralName: 'product-contacts';
    displayName: 'product_contact';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    producttype: Attribute.String;
    productname: Attribute.String;
    contactperson: Attribute.String;
    contactnumber: Attribute.BigInteger;
    contactemailid: Attribute.Email;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-contact.product-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-contact.product-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRansomewareRansomeware extends Schema.SingleType {
  collectionName: 'ransomewares';
  info: {
    singularName: 'ransomeware';
    pluralName: 'ransomewares';
    displayName: 'Ransomeware';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    right_bg_url: Attribute.String;
    ransomeware_content: Attribute.Component<'ransomeware.ransomeware-intro'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ransomeware.ransomeware',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ransomeware.ransomeware',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRansomewareProposalRansomewareProposal
  extends Schema.CollectionType {
  collectionName: 'ransomeware_proposals';
  info: {
    singularName: 'ransomeware-proposal';
    pluralName: 'ransomeware-proposals';
    displayName: 'Ransomeware_proposal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    heading_content: Attribute.Component<
      'ransomeware.ransomeware-heading-content',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ransomeware-proposal.ransomeware-proposal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ransomeware-proposal.ransomeware-proposal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRecognitionRecognition extends Schema.CollectionType {
  collectionName: 'recognitions';
  info: {
    singularName: 'recognition';
    pluralName: 'recognitions';
    displayName: 'Recognition';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    button: Attribute.Component<'about.button'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::recognition.recognition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::recognition.recognition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSectionSection extends Schema.CollectionType {
  collectionName: 'sections';
  info: {
    singularName: 'section';
    pluralName: 'sections';
    displayName: 'Section';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    label: Attribute.String;
    links: Attribute.Component<'navbar.menu', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::section.section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::section.section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceService extends Schema.SingleType {
  collectionName: 'services';
  info: {
    singularName: 'service';
    pluralName: 'services';
    displayName: 'Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    section: Attribute.Component<'services.intro'>;
    timeline: Attribute.Component<'services.timeline'>;
    security_zone: Attribute.DynamicZone<['services.iot-security']>;
    testing: Attribute.Component<'services.p-testing', true>;
    Service_security: Attribute.Component<'home.service-home', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceHomeServiceHome extends Schema.CollectionType {
  collectionName: 'service_homes';
  info: {
    singularName: 'service-home';
    pluralName: 'service-homes';
    displayName: 'service_home';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    service_content: Attribute.Component<'home.service-it-ot', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service-home.service-home',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service-home.service-home',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceItServiceIt extends Schema.SingleType {
  collectionName: 'service_its';
  info: {
    singularName: 'service-it';
    pluralName: 'service-its';
    displayName: 'Service_IT';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    bg_url: Attribute.String;
    service_IT_content: Attribute.Component<
      'investor-relation.component-year',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service-it.service-it',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service-it.service-it',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceLinkServiceLink extends Schema.CollectionType {
  collectionName: 'service_links';
  info: {
    singularName: 'service-link';
    pluralName: 'service-links';
    displayName: 'service_link';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    label: Attribute.String;
    assessment: Attribute.Component<'services.iot-assessment', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service-link.service-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service-link.service-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceOtServiceOt extends Schema.SingleType {
  collectionName: 'service_ots';
  info: {
    singularName: 'service-ot';
    pluralName: 'service-ots';
    displayName: 'Service_OT';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    bg_url: Attribute.String;
    service_ot_content: Attribute.Component<
      'investor-relation.component-year',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service-ot.service-ot',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service-ot.service-ot',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSingleSectionSingleSection extends Schema.CollectionType {
  collectionName: 'single_sections';
  info: {
    singularName: 'single-section';
    pluralName: 'single-sections';
    displayName: 'Single_section';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    label: Attribute.String;
    description: Attribute.Text;
    icon_url: Attribute.String;
    icon: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::single-section.single-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::single-section.single-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSolutionSolution extends Schema.SingleType {
  collectionName: 'solutions';
  info: {
    singularName: 'solution';
    pluralName: 'solutions';
    displayName: 'Solution_Pages';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    solution: Attribute.DynamicZone<
      ['solution.solution-header', 'solution.zero-hack', 'solution.hids']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::solution.solution',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::solution.solution',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSolutionCaseSolutionCase extends Schema.CollectionType {
  collectionName: 'solution_cases';
  info: {
    singularName: 'solution-case';
    pluralName: 'solution-cases';
    displayName: 'solution_case';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    case_impact: Attribute.Component<'solution.use-case', true>;
    bg_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::solution-case.solution-case',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::solution-case.solution-case',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSolutionContactSolutionContact
  extends Schema.CollectionType {
  collectionName: 'solution_contacts';
  info: {
    singularName: 'solution-contact';
    pluralName: 'solution-contacts';
    displayName: 'Solution_contact';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    email: Attribute.String;
    message: Attribute.String;
    organizationName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::solution-contact.solution-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::solution-contact.solution-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSolutionPageSolutionPage extends Schema.CollectionType {
  collectionName: 'solution_pages';
  info: {
    singularName: 'solution-page';
    pluralName: 'solution-pages';
    displayName: 'Solution_page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    solution_page: Attribute.Component<'solution.solution-header'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::solution-page.solution-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::solution-page.solution-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStrategicallianceStrategicalliance
  extends Schema.CollectionType {
  collectionName: 'strategicalliances';
  info: {
    singularName: 'strategicalliance';
    pluralName: 'strategicalliances';
    displayName: 'Strategicalliance';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logo_url: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::strategicalliance.strategicalliance',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::strategicalliance.strategicalliance',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTermsConditionTermsCondition extends Schema.SingleType {
  collectionName: 'terms_conditions';
  info: {
    singularName: 'terms-condition';
    pluralName: 'terms-conditions';
    displayName: 'Terms_condition';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    bg_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::terms-condition.terms-condition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::terms-condition.terms-condition',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTimelineTimeline extends Schema.CollectionType {
  collectionName: 'timelines';
  info: {
    singularName: 'timeline';
    pluralName: 'timelines';
    displayName: 'Timeline';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::timeline.timeline',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::timeline.timeline',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTopRightMenuTopRightMenu extends Schema.SingleType {
  collectionName: 'top_right_menus';
  info: {
    singularName: 'top-right-menu';
    pluralName: 'top-right-menus';
    displayName: 'top_right_menu';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    body: Attribute.DynamicZone<
      ['navbar.menu', 'navbar.dropdown', 'navbar.single-dropdown']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::top-right-menu.top-right-menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::top-right-menu.top-right-menu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTraceTrace extends Schema.CollectionType {
  collectionName: 'traces';
  info: {
    singularName: 'trace';
    pluralName: 'traces';
    displayName: 'Trace_feature';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bg_url: Attribute.String;
    title: Attribute.String;
    feature_trace: Attribute.Component<'solution.trace-features', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::trace.trace',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::trace.trace',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTraceBenefitTraceBenefit extends Schema.CollectionType {
  collectionName: 'trace_benefits';
  info: {
    singularName: 'trace-benefit';
    pluralName: 'trace-benefits';
    displayName: 'Trace_benefit';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    bg_url: Attribute.String;
    trace_benefit: Attribute.Component<'solution.trace-features', true>;
    benefit_card: Attribute.Component<'solution.solution-card', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::trace-benefit.trace-benefit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::trace-benefit.trace-benefit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTrainingTraining extends Schema.SingleType {
  collectionName: 'trainings';
  info: {
    singularName: 'training';
    pluralName: 'trainings';
    displayName: 'Training';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    training: Attribute.DynamicZone<
      ['training.training-program', 'training.btog']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::training.training',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::training.training',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUseCaseUseCase extends Schema.SingleType {
  collectionName: 'use_cases';
  info: {
    singularName: 'use-case';
    pluralName: 'use-cases';
    displayName: 'Use_case';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    bg_url: Attribute.String;
    use_case_cards: Attribute.Relation<
      'api::use-case.use-case',
      'oneToMany',
      'api::use-case-card.use-case-card'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::use-case.use-case',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::use-case.use-case',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUseCaseCardUseCaseCard extends Schema.CollectionType {
  collectionName: 'use_case_cards';
  info: {
    singularName: 'use-case-card';
    pluralName: 'use-case-cards';
    displayName: 'Use_case_card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    pdf_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::use-case-card.use-case-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::use-case-card.use-case-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUseCaseDownloadDetailUseCaseDownloadDetail
  extends Schema.CollectionType {
  collectionName: 'use_case_download_details';
  info: {
    singularName: 'use-case-download-detail';
    pluralName: 'use-case-download-details';
    displayName: 'Use_case_download_detail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    contact: Attribute.BigInteger;
    email: Attribute.Email;
    companyName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::use-case-download-detail.use-case-download-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::use-case-download-detail.use-case-download-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWhitePaperWhitePaper extends Schema.SingleType {
  collectionName: 'white_papers';
  info: {
    singularName: 'white-paper';
    pluralName: 'white-papers';
    displayName: 'White_paper';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    bg_url: Attribute.String;
    white_paper_cards: Attribute.Relation<
      'api::white-paper.white-paper',
      'oneToMany',
      'api::white-paper-card.white-paper-card'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::white-paper.white-paper',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::white-paper.white-paper',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWhitePaperCardWhitePaperCard extends Schema.CollectionType {
  collectionName: 'white_paper_cards';
  info: {
    singularName: 'white-paper-card';
    pluralName: 'white-paper-cards';
    displayName: 'White_paper_card';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    pdf_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::white-paper-card.white-paper-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::white-paper-card.white-paper-card',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWhitePaperDownloadDetailWhitePaperDownloadDetail
  extends Schema.CollectionType {
  collectionName: 'white_paper_download_details';
  info: {
    singularName: 'white-paper-download-detail';
    pluralName: 'white-paper-download-details';
    displayName: 'white_paper_download_detail';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    contact: Attribute.BigInteger;
    email: Attribute.Email;
    companyName: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::white-paper-download-detail.white-paper-download-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::white-paper-download-detail.white-paper-download-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiXdrXdr extends Schema.CollectionType {
  collectionName: 'xdrs';
  info: {
    singularName: 'xdr';
    pluralName: 'xdrs';
    displayName: 'XDR';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    desc: Attribute.Text & Attribute.Required;
    small_title: Attribute.String & Attribute.Required;
    media: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::xdr.xdr', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::xdr.xdr', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiZerohackZerohack extends Schema.SingleType {
  collectionName: 'zerohacks';
  info: {
    singularName: 'zerohack';
    pluralName: 'zerohacks';
    displayName: 'ZerohackR';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    video: Attribute.Media;
    description: Attribute.String;
    benefit: Attribute.Component<'zerohack.zerohack'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::zerohack.zerohack',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::zerohack.zerohack',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiZerohackOtZerohackOt extends Schema.SingleType {
  collectionName: 'zerohack_ots';
  info: {
    singularName: 'zerohack-ot';
    pluralName: 'zerohack-ots';
    displayName: 'ZerohackOT';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    Feature: Attribute.Component<'zerohack.zerohack'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::zerohack-ot.zerohack-ot',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::zerohack-ot.zerohack-ot',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiZerohackSimZerohackSim extends Schema.SingleType {
  collectionName: 'zerohack_sims';
  info: {
    singularName: 'zerohack-sim';
    pluralName: 'zerohack-sims';
    displayName: 'ZerohackSim';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    Feature: Attribute.Component<'zerohack.zerohack'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::zerohack-sim.zerohack-sim',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::zerohack-sim.zerohack-sim',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about.about': ApiAboutAbout;
      'api::about-cyber.about-cyber': ApiAboutCyberAboutCyber;
      'api::blog.blog': ApiBlogBlog;
      'api::btog.btog': ApiBtogBtog;
      'api::career-pathway.career-pathway': ApiCareerPathwayCareerPathway;
      'api::career-program.career-program': ApiCareerProgramCareerProgram;
      'api::contact-detail.contact-detail': ApiContactDetailContactDetail;
      'api::contact-form.contact-form': ApiContactFormContactForm;
      'api::cyber-guru.cyber-guru': ApiCyberGuruCyberGuru;
      'api::cyber-module.cyber-module': ApiCyberModuleCyberModule;
      'api::footer.footer': ApiFooterFooter;
      'api::footer-contact-email.footer-contact-email': ApiFooterContactEmailFooterContactEmail;
      'api::hids-feature.hids-feature': ApiHidsFeatureHidsFeature;
      'api::home.home': ApiHomeHome;
      'api::home-product.home-product': ApiHomeProductHomeProduct;
      'api::industry.industry': ApiIndustryIndustry;
      'api::industry-left.industry-left': ApiIndustryLeftIndustryLeft;
      'api::industry-right.industry-right': ApiIndustryRightIndustryRight;
      'api::institution-contact.institution-contact': ApiInstitutionContactInstitutionContact;
      'api::investor.investor': ApiInvestorInvestor;
      'api::investor-relation.investor-relation': ApiInvestorRelationInvestorRelation;
      'api::job-application.job-application': ApiJobApplicationJobApplication;
      'api::latest-blog.latest-blog': ApiLatestBlogLatestBlog;
      'api::media-coverage.media-coverage': ApiMediaCoverageMediaCoverage;
      'api::partner.partner': ApiPartnerPartner;
      'api::partner-content.partner-content': ApiPartnerContentPartnerContent;
      'api::privacy-policy.privacy-policy': ApiPrivacyPolicyPrivacyPolicy;
      'api::product-contact.product-contact': ApiProductContactProductContact;
      'api::ransomeware.ransomeware': ApiRansomewareRansomeware;
      'api::ransomeware-proposal.ransomeware-proposal': ApiRansomewareProposalRansomewareProposal;
      'api::recognition.recognition': ApiRecognitionRecognition;
      'api::section.section': ApiSectionSection;
      'api::service.service': ApiServiceService;
      'api::service-home.service-home': ApiServiceHomeServiceHome;
      'api::service-it.service-it': ApiServiceItServiceIt;
      'api::service-link.service-link': ApiServiceLinkServiceLink;
      'api::service-ot.service-ot': ApiServiceOtServiceOt;
      'api::single-section.single-section': ApiSingleSectionSingleSection;
      'api::solution.solution': ApiSolutionSolution;
      'api::solution-case.solution-case': ApiSolutionCaseSolutionCase;
      'api::solution-contact.solution-contact': ApiSolutionContactSolutionContact;
      'api::solution-page.solution-page': ApiSolutionPageSolutionPage;
      'api::strategicalliance.strategicalliance': ApiStrategicallianceStrategicalliance;
      'api::terms-condition.terms-condition': ApiTermsConditionTermsCondition;
      'api::timeline.timeline': ApiTimelineTimeline;
      'api::top-right-menu.top-right-menu': ApiTopRightMenuTopRightMenu;
      'api::trace.trace': ApiTraceTrace;
      'api::trace-benefit.trace-benefit': ApiTraceBenefitTraceBenefit;
      'api::training.training': ApiTrainingTraining;
      'api::use-case.use-case': ApiUseCaseUseCase;
      'api::use-case-card.use-case-card': ApiUseCaseCardUseCaseCard;
      'api::use-case-download-detail.use-case-download-detail': ApiUseCaseDownloadDetailUseCaseDownloadDetail;
      'api::white-paper.white-paper': ApiWhitePaperWhitePaper;
      'api::white-paper-card.white-paper-card': ApiWhitePaperCardWhitePaperCard;
      'api::white-paper-download-detail.white-paper-download-detail': ApiWhitePaperDownloadDetailWhitePaperDownloadDetail;
      'api::xdr.xdr': ApiXdrXdr;
      'api::zerohack.zerohack': ApiZerohackZerohack;
      'api::zerohack-ot.zerohack-ot': ApiZerohackOtZerohackOt;
      'api::zerohack-sim.zerohack-sim': ApiZerohackSimZerohackSim;
    }
  }
}
