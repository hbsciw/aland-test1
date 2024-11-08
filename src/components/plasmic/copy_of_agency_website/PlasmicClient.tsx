// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: h64FJUinfLsT3oJv18qEKw
// Component: tfh3uRYjbjAy

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
import sty from "./PlasmicClient.module.css"; // plasmic-import: tfh3uRYjbjAy/css

createPlasmicElementProxy;

export type PlasmicClient__VariantMembers = {};
export type PlasmicClient__VariantsArgs = {};
type VariantPropType = keyof PlasmicClient__VariantsArgs;
export const PlasmicClient__VariantProps = new Array<VariantPropType>();

export type PlasmicClient__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicClient__ArgsType;
export const PlasmicClient__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicClient__OverridesType = {
  root?: Flex__<"div">;
  h2?: Flex__<"h2">;
  freeBox?: Flex__<"div">;
};

export interface DefaultClientProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

const $$ = {};

function PlasmicClient__RenderFunc(props: {
  variants: PlasmicClient__VariantsArgs;
  args: PlasmicClient__ArgsType;
  overrides: PlasmicClient__OverridesType;
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <h2
        data-plasmic-name={"h2"}
        data-plasmic-override={overrides.h2}
        className={classNames(projectcss.all, projectcss.h2, sty.h2)}
      >
        {renderPlasmicSlot({
          defaultContents: "Client name",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </h2>
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {renderPlasmicSlot({
          defaultContents:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          value: args.slot
        })}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h2", "freeBox"],
  h2: ["h2"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h2: "h2";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicClient__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicClient__VariantsArgs;
    args?: PlasmicClient__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicClient__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicClient__ArgsType,
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
          internalArgPropNames: PlasmicClient__ArgProps,
          internalVariantPropNames: PlasmicClient__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicClient__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicClient";
  } else {
    func.displayName = `PlasmicClient.${nodeName}`;
  }
  return func;
}

export const PlasmicClient = Object.assign(
  // Top-level PlasmicClient renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicClient
    internalVariantProps: PlasmicClient__VariantProps,
    internalArgProps: PlasmicClient__ArgProps
  }
);

export default PlasmicClient;
/* prettier-ignore-end */
