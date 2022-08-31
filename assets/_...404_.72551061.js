import { g as getNextElement, i as insert, c as createComponent, L as Link, t as template } from './index.62e39eb7.js';

const _tmpl$ = /*#__PURE__*/template(`<main class="text-center mx-auto text-primary p-4 w-full h-screen font-default"><h1 class="text-center max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">404 Page Not Found</h1><p class=" text-center"></p></main>`);
function NotFound() {
  return (() => {
    const _el$ = getNextElement(_tmpl$),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.nextSibling;

    insert(_el$3, createComponent(Link, {
      href: "/",
      "class": "text-sky-600 hover:underline",
      children: "Go back to Home Page"
    }));

    return _el$;
  })();
}

export { NotFound as default };
