// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: h64FJUinfLsT3oJv18qEKw
// Component: EEpzYH0J7Tm2

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: h64FJUinfLsT3oJv18qEKw/projectcss
import sty from "./PlasmicFooterMain.module.css"; // plasmic-import: EEpzYH0J7Tm2/css

createPlasmicElementProxy;

export type PlasmicFooterMain__VariantMembers = {};
export type PlasmicFooterMain__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterMain__VariantsArgs;
export const PlasmicFooterMain__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterMain__ArgsType = {};
type ArgPropType = keyof PlasmicFooterMain__ArgsType;
export const PlasmicFooterMain__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterMain__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  rowWrapper?: Flex__<"div">;
  colmn1?: Flex__<"div">;
  colmn2?: Flex__<"div">;
  colmn22?: Flex__<"div">;
  colmn3?: Flex__<"div">;
};

export interface DefaultFooterMainProps {
  className?: string;
}

const $$ = {};

function PlasmicFooterMain__RenderFunc(props: {
  variants: PlasmicFooterMain__VariantsArgs;
  args: PlasmicFooterMain__ArgsType;
  overrides: PlasmicFooterMain__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"rowWrapper"}
          data-plasmic-override={overrides.rowWrapper}
          hasGap={true}
          className={classNames(projectcss.all, sty.rowWrapper)}
        >
          <div
            data-plasmic-name={"colmn1"}
            data-plasmic-override={overrides.colmn1}
            className={classNames(projectcss.all, sty.colmn1)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__udJ8Y
              )}
            >
              {"About us"}
            </h3>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2ErYs
              )}
            >
              <React.Fragment>
                <React.Fragment>
                  {
                    "\u00a9 Company. All rights reserved. This site proudly built with "
                  }
                </React.Fragment>
                {
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.link__vgfJs
                    )}
                    href={"https://www.plasmic.app"}
                    platform={"react"}
                  >
                    {"Plasmic"}
                  </PlasmicLink__>
                }
                <React.Fragment>{"."}</React.Fragment>
              </React.Fragment>
            </div>
          </div>
          <div
            data-plasmic-name={"colmn2"}
            data-plasmic-override={overrides.colmn2}
            className={classNames(projectcss.all, sty.colmn2)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__zubj1
              )}
            >
              {"Links"}
            </h3>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__ctsu8
              )}
              href={`/services`}
              platform={"react"}
            >
              {"Services"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__nguOb
              )}
              href={`/about-us`}
              platform={"react"}
            >
              {"About us"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__qpyVw
              )}
              href={"#"}
              platform={"react"}
            >
              {"Testimonials"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__jdSmv
              )}
              href={"#"}
              platform={"react"}
            >
              {"Blog"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__cr9Uc
              )}
              href={`/contact`}
              platform={"react"}
            >
              {"Contact us\n"}
            </PlasmicLink__>
          </div>
          <div
            data-plasmic-name={"colmn22"}
            data-plasmic-override={overrides.colmn22}
            className={classNames(projectcss.all, sty.colmn22)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__rfVUi
              )}
            >
              {"Nav Links"}
            </h3>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__wmqsd
              )}
              href={`/services`}
              platform={"react"}
            >
              {"Services"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__gg5D1
              )}
              href={`/about-us`}
              platform={"react"}
            >
              {"About us"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__hhwYd
              )}
              href={`/client`}
              platform={"react"}
            >
              {"Testimonials"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__iMngA
              )}
              href={"#"}
              platform={"react"}
            >
              {"Blog"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__qLNx
              )}
              href={`/contact`}
              platform={"react"}
            >
              {"Contact us\n"}
            </PlasmicLink__>
          </div>
          <div
            data-plasmic-name={"colmn3"}
            data-plasmic-override={overrides.colmn3}
            className={classNames(projectcss.all, sty.colmn3)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__oSpaf
              )}
            >
              {"Contact "}
            </h3>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vp5HY
              )}
            >
              {"1234 Lorem Ipsum .\nLorem Ipsum , GA 30308"}
            </div>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__bLxdC
              )}
              href={"#"}
              platform={"react"}
            >
              {"xyz@company.com"}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__ditAi
              )}
              href={"#"}
              platform={"react"}
            >
              {"1234567890"}
            </PlasmicLink__>
          </div>
        </Stack__>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "rowWrapper",
    "colmn1",
    "colmn2",
    "colmn22",
    "colmn3"
  ],
  freeBox: ["freeBox", "rowWrapper", "colmn1", "colmn2", "colmn22", "colmn3"],
  rowWrapper: ["rowWrapper", "colmn1", "colmn2", "colmn22", "colmn3"],
  colmn1: ["colmn1"],
  colmn2: ["colmn2"],
  colmn22: ["colmn22"],
  colmn3: ["colmn3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  rowWrapper: "div";
  colmn1: "div";
  colmn2: "div";
  colmn22: "div";
  colmn3: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterMain__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterMain__VariantsArgs;
    args?: PlasmicFooterMain__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterMain__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooterMain__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooterMain__ArgProps,
          internalVariantPropNames: PlasmicFooterMain__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterMain__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterMain";
  } else {
    func.displayName = `PlasmicFooterMain.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterMain = Object.assign(
  // Top-level PlasmicFooterMain renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    rowWrapper: makeNodeComponent("rowWrapper"),
    colmn1: makeNodeComponent("colmn1"),
    colmn2: makeNodeComponent("colmn2"),
    colmn22: makeNodeComponent("colmn22"),
    colmn3: makeNodeComponent("colmn3"),

    // Metadata about props expected for PlasmicFooterMain
    internalVariantProps: PlasmicFooterMain__VariantProps,
    internalArgProps: PlasmicFooterMain__ArgProps
  }
);

export default PlasmicFooterMain;
/* prettier-ignore-end */
