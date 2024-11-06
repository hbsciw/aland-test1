// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: h64FJUinfLsT3oJv18qEKw
// Component: jY3yw4QkUFJH

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
import ServiceWhite from "../../ServiceWhite"; // plasmic-import: jYxl0YOCkr3B/component
import BlueBdr from "../../BlueBdr"; // plasmic-import: gkXkKfESviAP/component
import ServiceDark from "../../ServiceDark"; // plasmic-import: UXCtVhur1-m_/component
import HomeFooterTop from "../../HomeFooterTop"; // plasmic-import: EE1u5reRX2Fo/component
import FooterMain from "../../FooterMain"; // plasmic-import: EEpzYH0J7Tm2/component

import { useScreenVariants as useScreenVariantsuLgfdXaUnlx8 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: uLgfdXaUNLX8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: h64FJUinfLsT3oJv18qEKw/projectcss
import sty from "./PlasmicServices.module.css"; // plasmic-import: jY3yw4QkUFJH/css

createPlasmicElementProxy;

export type PlasmicServices__VariantMembers = {};
export type PlasmicServices__VariantsArgs = {};
type VariantPropType = keyof PlasmicServices__VariantsArgs;
export const PlasmicServices__VariantProps = new Array<VariantPropType>();

export type PlasmicServices__ArgsType = {};
type ArgPropType = keyof PlasmicServices__ArgsType;
export const PlasmicServices__ArgProps = new Array<ArgPropType>();

export type PlasmicServices__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  aboutUsBanner?: Flex__<"div">;
  foreground2?: Flex__<"div">;
  h1?: Flex__<"h1">;
  serviceRow?: Flex__<"div">;
  serviceRow2?: Flex__<"div">;
  serviceRow3?: Flex__<"div">;
  footerTopSection?: Flex__<"div">;
  homeFooterTop?: Flex__<typeof HomeFooterTop>;
  footerMain?: Flex__<typeof FooterMain>;
};

export interface DefaultServicesProps {
  className?: string;
}

const $$ = {};

function PlasmicServices__RenderFunc(props: {
  variants: PlasmicServices__VariantsArgs;
  args: PlasmicServices__ArgsType;
  overrides: PlasmicServices__OverridesType;
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
            data-plasmic-name={"aboutUsBanner"}
            data-plasmic-override={overrides.aboutUsBanner}
            className={classNames(projectcss.all, sty.aboutUsBanner)}
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
                className={classNames(projectcss.all, sty.freeBox___2E)}
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
                  {"Services"}
                </h1>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__s7KcV
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Lorem Ipsum is simply dummy text of the printing and typesetting indstandard dummy text ever since the 1500s."
                    : "Lorem Ipsum is simply dummy text of the printing and typesetting indstandard dummy text ever since the 1500s."}
                </div>
              </Stack__>
            </Stack__>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__nhjsj)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__zwGgs)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__z1E89)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__pelVk)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__gqCsg
                    )}
                  >
                    {"Service type"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4PaNz
                    )}
                  >
                    {
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    }
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__axJEd)}
                >
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"serviceRow"}
                    data-plasmic-override={overrides.serviceRow}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.serviceRow)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__yEl4)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite___1IdDp
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__urgcq
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__znZi)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite___8BxzW
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__gYgMn
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__nGsYn)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__iGpgx
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__mqRtb
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__nqV)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__evquz
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__qvog5
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__pll9Q)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite___09Ls6
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__rj54V
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__ivgd5)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__kCfo
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__oZrPf
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
            </Stack__>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___86LF)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__rji1Z)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__a1T9F)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__mfjYm)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__mjPPq
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Service category"
                      : "Service type"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cz7Qx
                    )}
                  >
                    {
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                    }
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__hczg7)}
                >
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"serviceRow2"}
                    data-plasmic-override={overrides.serviceRow2}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.serviceRow2)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__rYaPn)}
                    >
                      <ServiceDark
                        className={classNames(
                          "__wab_instance",
                          sty.serviceDark__lR4Ka
                        )}
                        slot={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__yWaNz)}
                    >
                      <ServiceDark
                        className={classNames(
                          "__wab_instance",
                          sty.serviceDark__mzQeb
                        )}
                        slot={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        }
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___8JZpJ
                          )}
                        >
                          {"Service name 3"}
                        </div>
                      </ServiceDark>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__aq6O)}
                    >
                      <ServiceDark
                        className={classNames(
                          "__wab_instance",
                          sty.serviceDark__due14
                        )}
                        slot={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__wN94E)}
                    >
                      <ServiceDark
                        className={classNames(
                          "__wab_instance",
                          sty.serviceDark__zjuH0
                        )}
                        slot={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__gLyFa)}
                    >
                      <ServiceDark
                        className={classNames(
                          "__wab_instance",
                          sty.serviceDark__aehzb
                        )}
                        slot={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__jqqav)}
                    >
                      <ServiceDark
                        className={classNames(
                          "__wab_instance",
                          sty.serviceDark__uqRzp
                        )}
                        slot={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        }
                      />
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
            </Stack__>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___89Qx)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__nLkyF)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__vscos)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__qGFbi)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2___9PQr7
                    )}
                  >
                    {"Service type"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tOsPd
                    )}
                  >
                    {
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    }
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__pxfev)}
                >
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"serviceRow3"}
                    data-plasmic-override={overrides.serviceRow3}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.serviceRow3)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__hEr4G)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__wNIn
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__nwKsB
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__cRm0P)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__dPt2O
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__lpn3N
                          )}
                        >
                          {"Services 2"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__ry112)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__oIyKi
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__qXsQ
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__noh2Y)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__bTys
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__qocQz
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column___2YzX0)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__oNnvw
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__v8XCk
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column___0McR0)}
                    >
                      <ServiceWhite
                        className={classNames(
                          "__wab_instance",
                          sty.serviceWhite__zgUv
                        )}
                      >
                        <h3
                          className={classNames(
                            projectcss.all,
                            projectcss.h3,
                            projectcss.__wab_text,
                            sty.h3__tElKe
                          )}
                        >
                          {"Service name"}
                        </h3>
                      </ServiceWhite>
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
            </Stack__>
          </div>
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
    "aboutUsBanner",
    "foreground2",
    "h1",
    "serviceRow",
    "serviceRow2",
    "serviceRow3",
    "footerTopSection",
    "homeFooterTop",
    "footerMain"
  ],
  header: ["header"],
  aboutUsBanner: ["aboutUsBanner", "foreground2", "h1"],
  foreground2: ["foreground2", "h1"],
  h1: ["h1"],
  serviceRow: ["serviceRow"],
  serviceRow2: ["serviceRow2"],
  serviceRow3: ["serviceRow3"],
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
  aboutUsBanner: "div";
  foreground2: "div";
  h1: "h1";
  serviceRow: "div";
  serviceRow2: "div";
  serviceRow3: "div";
  footerTopSection: "div";
  homeFooterTop: typeof HomeFooterTop;
  footerMain: typeof FooterMain;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicServices__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicServices__VariantsArgs;
    args?: PlasmicServices__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicServices__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicServices__ArgsType,
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
          internalArgPropNames: PlasmicServices__ArgProps,
          internalVariantPropNames: PlasmicServices__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    aboutUsBanner: makeNodeComponent("aboutUsBanner"),
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    serviceRow: makeNodeComponent("serviceRow"),
    serviceRow2: makeNodeComponent("serviceRow2"),
    serviceRow3: makeNodeComponent("serviceRow3"),
    footerTopSection: makeNodeComponent("footerTopSection"),
    homeFooterTop: makeNodeComponent("homeFooterTop"),
    footerMain: makeNodeComponent("footerMain"),

    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Service",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicServices;
/* prettier-ignore-end */
