import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductAttributes extends Schema.Component {
  collectionName: 'components_product_attributes';
  info: {
    displayName: 'attributes';
    icon: 'stack';
    description: '';
  };
  attributes: {
    date: Attribute.Date;
  };
}

export interface ProductColor extends Schema.Component {
  collectionName: 'components_product_colors';
  info: {
    displayName: 'color';
    icon: 'paint';
    description: '';
  };
  attributes: {
    color: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.attributes': ProductAttributes;
      'product.color': ProductColor;
    }
  }
}
