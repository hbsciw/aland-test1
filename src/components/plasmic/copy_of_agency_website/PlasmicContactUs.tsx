// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: h64FJUinfLsT3oJv18qEKw
// Component: xNJz9Yj1hYQj

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

import Header from "../../Header"; // plasmic-import: h2Z0y8j3p_XM/component
import TextInput from "../../TextInput"; // plasmic-import: jgqUgdyhP1tY/component
import Button from "../../Button"; // plasmic-import: IIl499FjkAwL/component
import HomeFooterTop from "../../HomeFooterTop"; // plasmic-import: EE1u5reRX2Fo/component
import FooterMain from "../../FooterMain"; // plasmic-import: EEpzYH0J7Tm2/component

import { useScreenVariants as useScreenVariantsuLgfdXaUnlx8 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: uLgfdXaUNLX8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: h64FJUinfLsT3oJv18qEKw/projectcss
import sty from "./PlasmicContactUs.module.css"; // plasmic-import: xNJz9Yj1hYQj/css

import SearchSvgIcon from "./icons/PlasmicIcon__SearchSvg"; // plasmic-import: e0rbT1dFFP9o/icon
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: Z9RSHs6jszKv/icon

createPlasmicElementProxy;

export type PlasmicContactUs__VariantMembers = {};
export type PlasmicContactUs__VariantsArgs = {};
type VariantPropType = keyof PlasmicContactUs__VariantsArgs;
export const PlasmicContactUs__VariantProps = new Array<VariantPropType>();

export type PlasmicContactUs__ArgsType = {};
type ArgPropType = keyof PlasmicContactUs__ArgsType;
export const PlasmicContactUs__ArgProps = new Array<ArgPropType>();

export type PlasmicContactUs__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  banner?: Flex__<"div">;
  foreground2?: Flex__<"div">;
  h1?: Flex__<"h1">;
  clientsSection5?: Flex__<"div">;
  formWrapper?: Flex__<"div">;
  name?: Flex__<typeof TextInput>;
  svg?: Flex__<"svg">;
  name2?: Flex__<typeof TextInput>;
  name3?: Flex__<typeof TextInput>;
  name4?: Flex__<typeof TextInput>;
  textarea?: Flex__<"textarea">;
  button?: Flex__<typeof Button>;
  h2?: Flex__<"h2">;
  h4?: Flex__<"h4">;
  footerTopSection?: Flex__<"div">;
  homeFooterTop?: Flex__<typeof HomeFooterTop>;
  footerMain?: Flex__<typeof FooterMain>;
};

export interface DefaultContactUsProps {
  className?: string;
}

const $$ = {};

function PlasmicContactUs__RenderFunc(props: {
  variants: PlasmicContactUs__VariantsArgs;
  args: PlasmicContactUs__ArgsType;
  overrides: PlasmicContactUs__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "name.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "name2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "name3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "name3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "name4.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsuLgfdXaUnlx8()
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"banner"}
            data-plasmic-override={overrides.banner}
            className={classNames(projectcss.all, sty.banner)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__y6LEk)}
              >
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Contact us"
                    : "Contact us"}
                </h1>
              </Stack__>
            </Stack__>
          </div>
          <Stack__
            as={"div"}
            data-plasmic-name={"clientsSection5"}
            data-plasmic-override={overrides.clientsSection5}
            hasGap={true}
            className={classNames(projectcss.all, sty.clientsSection5)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__nZ8Fb)}
            >
              <div className={classNames(projectcss.all, sty.columns__cZPlt)}>
                <div className={classNames(projectcss.all, sty.column__oNv1Z)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nehbe
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Proactively architect worldwide sources, then globally implement enabled  users, then collaboratively innovate unique expertise, then continually  strategize excellent markets."
                      : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column___3Es5X)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__qlrrg)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__m5EP)}
                    >
                      <div
                        data-plasmic-name={"formWrapper"}
                        data-plasmic-override={overrides.formWrapper}
                        className={classNames(projectcss.all, sty.formWrapper)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.columns__b5QQz
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__yIa1X
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__mnkhT
                              )}
                            >
                              {"First name"}
                            </div>
                            <TextInput
                              data-plasmic-name={"name"}
                              data-plasmic-override={overrides.name}
                              className={classNames("__wab_instance", sty.name)}
                              endIcon={
                                <CheckSvgIcon
                                  data-plasmic-name={"svg"}
                                  data-plasmic-override={overrides.svg}
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg
                                  )}
                                  role={"img"}
                                />
                              }
                              onChange={(...eventArgs) => {
                                generateStateOnChangeProp($state, [
                                  "name",
                                  "value"
                                ])(
                                  (e => e.target?.value).apply(null, eventArgs)
                                );
                              }}
                              placeholder={""}
                              value={
                                generateStateValueProp($state, [
                                  "name",
                                  "value"
                                ]) ?? ""
                              }
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__jdwPs
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__i5RDf
                              )}
                            >
                              {"Last name"}
                            </div>
                            <TextInput
                              data-plasmic-name={"name2"}
                              data-plasmic-override={overrides.name2}
                              className={classNames(
                                "__wab_instance",
                                sty.name2
                              )}
                              onChange={(...eventArgs) => {
                                generateStateOnChangeProp($state, [
                                  "name2",
                                  "value"
                                ])(
                                  (e => e.target?.value).apply(null, eventArgs)
                                );
                              }}
                              placeholder={""}
                              value={
                                generateStateValueProp($state, [
                                  "name2",
                                  "value"
                                ]) ?? ""
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.columns__q4AbK
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__bYzF8
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__cYeoC
                              )}
                            >
                              {"Email address"}
                            </div>
                            <TextInput
                              data-plasmic-name={"name3"}
                              data-plasmic-override={overrides.name3}
                              className={classNames(
                                "__wab_instance",
                                sty.name3
                              )}
                              onChange={(...eventArgs) => {
                                generateStateOnChangeProp($state, [
                                  "name3",
                                  "value"
                                ])(
                                  (e => e.target?.value).apply(null, eventArgs)
                                );
                              }}
                              placeholder={""}
                              value={
                                generateStateValueProp($state, [
                                  "name3",
                                  "value"
                                ]) ?? ""
                              }
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__xtlSx
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__agSuX
                              )}
                            >
                              {"Phone number"}
                            </div>
                            <TextInput
                              className={classNames(
                                "__wab_instance",
                                sty.textInput__yVJgU
                              )}
                              onChange={(...eventArgs) => {
                                generateStateOnChangeProp($state, [
                                  "name3",
                                  "value"
                                ])(
                                  (e => e.target?.value).apply(null, eventArgs)
                                );
                              }}
                              placeholder={""}
                              value={
                                generateStateValueProp($state, [
                                  "name3",
                                  "value"
                                ]) ?? ""
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.columns__lWyU0
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__rZh7J
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__pWbj4
                              )}
                            >
                              {"Company"}
                            </div>
                            <TextInput
                              data-plasmic-name={"name4"}
                              data-plasmic-override={overrides.name4}
                              className={classNames(
                                "__wab_instance",
                                sty.name4
                              )}
                              onChange={(...eventArgs) => {
                                generateStateOnChangeProp($state, [
                                  "name4",
                                  "value"
                                ])(
                                  (e => e.target?.value).apply(null, eventArgs)
                                );
                              }}
                              placeholder={""}
                              value={
                                generateStateValueProp($state, [
                                  "name4",
                                  "value"
                                ]) ?? ""
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.columns__zSpw
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__t6Lrm
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__e57HR
                              )}
                            >
                              {"Message"}
                            </div>
                            <textarea
                              data-plasmic-name={"textarea"}
                              data-plasmic-override={overrides.textarea}
                              className={classNames(
                                projectcss.all,
                                projectcss.textarea,
                                sty.textarea
                              )}
                              value={""}
                            />

                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__pRsr
                              )}
                            >
                              <Button
                                data-plasmic-name={"button"}
                                data-plasmic-override={overrides.button}
                                className={classNames(
                                  "__wab_instance",
                                  sty.button
                                )}
                                submitsForm={true}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__bqNbg
                                  )}
                                >
                                  {"Submit"}
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__oZF)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__lf84O
                        )}
                      >
                        <h2
                          data-plasmic-name={"h2"}
                          data-plasmic-override={overrides.h2}
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2
                          )}
                        >
                          {"Address"}
                        </h2>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ges7I
                          )}
                        >
                          {
                            "1234 Lorem Ipsum .\nLorem Ipsum , GA 30308\n1234567890"
                          }
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___8Un9Q
                          )}
                        >
                          {"xyz@companyname.com"}
                        </div>
                        <h4
                          data-plasmic-name={"h4"}
                          data-plasmic-override={overrides.h4}
                          className={classNames(
                            projectcss.all,
                            projectcss.h4,
                            projectcss.__wab_text,
                            sty.h4
                          )}
                        >
                          {"Address 2"}
                        </h4>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___0TzRb
                          )}
                        >
                          {
                            "1234 Lorem Ipsum .\nLorem Ipsum , GA 30308\n1234567890"
                          }
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___3X3Mu
                          )}
                        >
                          {"xyz@companyname.com"}
                        </div>
                      </Stack__>
                    </div>
                  </Stack__>
                </div>
              </div>
            </Stack__>
          </Stack__>
          <div
            data-plasmic-name={"footerTopSection"}
            data-plasmic-override={overrides.footerTopSection}
            className={classNames(projectcss.all, sty.footerTopSection)}
          >
            <HomeFooterTop
              data-plasmic-name={"homeFooterTop"}
              data-plasmic-override={overrides.homeFooterTop}
              className={classNames("__wab_instance", sty.homeFooterTop)}
            />
          </div>
          <FooterMain
            data-plasmic-name={"footerMain"}
            data-plasmic-override={overrides.footerMain}
            className={classNames("__wab_instance", sty.footerMain)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "banner",
    "foreground2",
    "h1",
    "clientsSection5",
    "formWrapper",
    "name",
    "svg",
    "name2",
    "name3",
    "name4",
    "textarea",
    "button",
    "h2",
    "h4",
    "footerTopSection",
    "homeFooterTop",
    "footerMain"
  ],
  header: ["header"],
  banner: ["banner", "foreground2", "h1"],
  foreground2: ["foreground2", "h1"],
  h1: ["h1"],
  clientsSection5: [
    "clientsSection5",
    "formWrapper",
    "name",
    "svg",
    "name2",
    "name3",
    "name4",
    "textarea",
    "button",
    "h2",
    "h4"
  ],
  formWrapper: [
    "formWrapper",
    "name",
    "svg",
    "name2",
    "name3",
    "name4",
    "textarea",
    "button"
  ],
  name: ["name", "svg"],
  svg: ["svg"],
  name2: ["name2"],
  name3: ["name3"],
  name4: ["name4"],
  textarea: ["textarea"],
  button: ["button"],
  h2: ["h2"],
  h4: ["h4"],
  footerTopSection: ["footerTopSection", "homeFooterTop"],
  homeFooterTop: ["homeFooterTop"],
  footerMain: ["footerMain"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  banner: "div";
  foreground2: "div";
  h1: "h1";
  clientsSection5: "div";
  formWrapper: "div";
  name: typeof TextInput;
  svg: "svg";
  name2: typeof TextInput;
  name3: typeof TextInput;
  name4: typeof TextInput;
  textarea: "textarea";
  button: typeof Button;
  h2: "h2";
  h4: "h4";
  footerTopSection: "div";
  homeFooterTop: typeof HomeFooterTop;
  footerMain: typeof FooterMain;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContactUs__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContactUs__VariantsArgs;
    args?: PlasmicContactUs__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContactUs__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContactUs__ArgsType,
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
          internalArgPropNames: PlasmicContactUs__ArgProps,
          internalVariantPropNames: PlasmicContactUs__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactUs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactUs";
  } else {
    func.displayName = `PlasmicContactUs.${nodeName}`;
  }
  return func;
}

export const PlasmicContactUs = Object.assign(
  // Top-level PlasmicContactUs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    banner: makeNodeComponent("banner"),
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    clientsSection5: makeNodeComponent("clientsSection5"),
    formWrapper: makeNodeComponent("formWrapper"),
    _name: makeNodeComponent("name"),
    svg: makeNodeComponent("svg"),
    name2: makeNodeComponent("name2"),
    name3: makeNodeComponent("name3"),
    name4: makeNodeComponent("name4"),
    textarea: makeNodeComponent("textarea"),
    button: makeNodeComponent("button"),
    h2: makeNodeComponent("h2"),
    h4: makeNodeComponent("h4"),
    footerTopSection: makeNodeComponent("footerTopSection"),
    homeFooterTop: makeNodeComponent("homeFooterTop"),
    footerMain: makeNodeComponent("footerMain"),

    // Metadata about props expected for PlasmicContactUs
    internalVariantProps: PlasmicContactUs__VariantProps,
    internalArgProps: PlasmicContactUs__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Contact",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContactUs;
/* prettier-ignore-end */