/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';
import '@stencil/state-tunnel';


declare global {

  namespace StencilComponents {
    interface MyGroups {
      'groupResetHandler': () => void;
      'renderGroups': (groups: any) => any;
      'setGroupHandler': (ev: any) => void;
    }
  }

  interface HTMLMyGroupsElement extends StencilComponents.MyGroups, HTMLStencilElement {}

  var HTMLMyGroupsElement: {
    prototype: HTMLMyGroupsElement;
    new (): HTMLMyGroupsElement;
  };
  interface HTMLElementTagNameMap {
    'my-groups': HTMLMyGroupsElement;
  }
  interface ElementTagNameMap {
    'my-groups': HTMLMyGroupsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-groups': JSXElements.MyGroupsAttributes;
    }
  }
  namespace JSXElements {
    export interface MyGroupsAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyMain {

    }
  }

  interface HTMLMyMainElement extends StencilComponents.MyMain, HTMLStencilElement {}

  var HTMLMyMainElement: {
    prototype: HTMLMyMainElement;
    new (): HTMLMyMainElement;
  };
  interface HTMLElementTagNameMap {
    'my-main': HTMLMyMainElement;
  }
  interface ElementTagNameMap {
    'my-main': HTMLMyMainElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-main': JSXElements.MyMainAttributes;
    }
  }
  namespace JSXElements {
    export interface MyMainAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyStar {
      'randomColor': () => string;
      'rank': string;
    }
  }

  interface HTMLMyStarElement extends StencilComponents.MyStar, HTMLStencilElement {}

  var HTMLMyStarElement: {
    prototype: HTMLMyStarElement;
    new (): HTMLMyStarElement;
  };
  interface HTMLElementTagNameMap {
    'my-star': HTMLMyStarElement;
  }
  interface ElementTagNameMap {
    'my-star': HTMLMyStarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-star': JSXElements.MyStarAttributes;
    }
  }
  namespace JSXElements {
    export interface MyStarAttributes extends HTMLAttributes {
      'rank'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyStudentList {
      'furt': any;
      'studentGroup': any;
      'yoy': any;
    }
  }

  interface HTMLMyStudentListElement extends StencilComponents.MyStudentList, HTMLStencilElement {}

  var HTMLMyStudentListElement: {
    prototype: HTMLMyStudentListElement;
    new (): HTMLMyStudentListElement;
  };
  interface HTMLElementTagNameMap {
    'my-student-list': HTMLMyStudentListElement;
  }
  interface ElementTagNameMap {
    'my-student-list': HTMLMyStudentListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-student-list': JSXElements.MyStudentListAttributes;
    }
  }
  namespace JSXElements {
    export interface MyStudentListAttributes extends HTMLAttributes {
      'furt'?: any;
      'studentGroup'?: any;
      'yoy'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyStudentRow {
      'addStarHandler': () => void;
      'buildScoresArray': () => any;
      'furt': any;
      'removeStarHandler': () => void;
      'student': any;
      'yoy': any;
    }
  }

  interface HTMLMyStudentRowElement extends StencilComponents.MyStudentRow, HTMLStencilElement {}

  var HTMLMyStudentRowElement: {
    prototype: HTMLMyStudentRowElement;
    new (): HTMLMyStudentRowElement;
  };
  interface HTMLElementTagNameMap {
    'my-student-row': HTMLMyStudentRowElement;
  }
  interface ElementTagNameMap {
    'my-student-row': HTMLMyStudentRowElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-student-row': JSXElements.MyStudentRowAttributes;
    }
  }
  namespace JSXElements {
    export interface MyStudentRowAttributes extends HTMLAttributes {
      'furt'?: any;
      'student'?: any;
      'yoy'?: any;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
