// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: h64FJUinfLsT3oJv18qEKw
// Component: jgqUgdyhP1tY

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

import * as pp from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: h64FJUinfLsT3oJv18qEKw/projectcss
import sty from "./PlasmicTextInput.module.css"; // plasmic-import: jgqUgdyhP1tY/css

import SearchSvgIcon from "./icons/PlasmicIcon__SearchSvg"; // plasmic-import: e0rbT1dFFP9o/icon
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: Z9RSHs6jszKv/icon

createPlasmicElementProxy;

export type PlasmicTextInput__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  isDisabled: "isDisabled";
  color: "dark";
};
export type PlasmicTextInput__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  color?: SingleChoiceArg<"dark">;
};
type VariantPropType = keyof PlasmicTextInput__VariantsArgs;
export const PlasmicTextInput__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "color"
);

export type PlasmicTextInput__ArgsType = {
  placeholder?: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  name?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onChange?: (event: any) => void;
  type?:
    | "text"
    | "password"
    | "hidden"
    | "number"
    | "date"
    | "datetime-local"
    | "time"
    | "email"
    | "tel";
  value?: string;
};
type ArgPropType = keyof PlasmicTextInput__ArgsType;
export const PlasmicTextInput__ArgProps = new Array<ArgPropType>(
  "placeholder",
  "endIcon",
  "startIcon",
  "name",
  "aria-label",
  "aria-labelledby",
  "onChange",
  "type",
  "value"
);

export type PlasmicTextInput__OverridesType = {
  root?: Flex__<"div">;
  startIconContainer?: Flex__<"div">;
  input?: Flex__<"input">;
  text?: Flex__<"div">;
  endIconContainer?: Flex__<"div">;
};

export interface DefaultTextInputProps extends pp.BaseTextInputProps {
  placeholder?: string;
  name?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onChange?: (event: any) => void;
  type?:
    | "text"
    | "password"
    | "hidden"
    | "number"
    | "date"
    | "datetime-local"
    | "time"
    | "email"
    | "tel";
  value?: string;
  color?: SingleChoiceArg<"dark">;
}

const $$ = {};

function PlasmicTextInput__RenderFunc(props: {
  variants: PlasmicTextInput__VariantsArgs;
  args: PlasmicTextInput__ArgsType;
  overrides: PlasmicTextInput__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          placeholder: "Enter something…"
        },
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
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "value",
        type: "writable",
        variableType: "text",

        valueProp: "value",
        onChangeProp: "onChange"
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

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: true
    });
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

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
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootcolor_dark]: hasVariant($state, "color", "dark"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"startIconContainer"}
        data-plasmic-override={overrides.startIconContainer}
        className={classNames(projectcss.all, sty.startIconContainer, {
          [sty.startIconContainer___focusVisibleWithin]:
            triggers.focusVisibleWithin_root,
          [sty.startIconContainercolor_dark]: hasVariant(
            $state,
            "color",
            "dark"
          ),
          [sty.startIconContainerisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.startIconContainershowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <SearchSvgIcon
              className={classNames(projectcss.all, sty.svg___07QH)}
              role={"img"}
            />
          ),

          value: args.startIcon,
          className: classNames(sty.slotTargetStartIcon, {
            [sty.slotTargetStartIconcolor_dark]: hasVariant(
              $state,
              "color",
              "dark"
            ),
            [sty.slotTargetStartIconshowStartIcon]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            )
          })
        })}
      </div>
      <input
        data-plasmic-name={"input"}
        data-plasmic-override={overrides.input}
        className={classNames(projectcss.all, projectcss.input, sty.input, {
          [sty.input___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.inputcolor_dark]: hasVariant($state, "color", "dark"),
          [sty.inputisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.inputshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        })}
        disabled={
          hasVariant($state, "isDisabled", "isDisabled") ? true : undefined
        }
        placeholder={args.placeholder}
        ref={ref => {
          $refs["input"] = ref;
        }}
        type={"text"}
      />

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {""}
      </div>
      <div
        data-plasmic-name={"endIconContainer"}
        data-plasmic-override={overrides.endIconContainer}
        className={classNames(projectcss.all, sty.endIconContainer, {
          [sty.endIconContainercolor_dark]: hasVariant($state, "color", "dark"),
          [sty.endIconContainershowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <CheckSvgIcon
              className={classNames(projectcss.all, sty.svg__yfJZ)}
              role={"img"}
            />
          ),

          value: args.endIcon,
          className: classNames(sty.slotTargetEndIcon, {
            [sty.slotTargetEndIconcolor_dark]: hasVariant(
              $state,
              "color",
              "dark"
            ),
            [sty.slotTargetEndIconshowEndIcon]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            )
          })
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.PlumeTextInputProps>(
  props: P,
  ref: pp.TextInputRef
) {
  return pp.useTextInput<P, typeof PlasmicTextInput>(
    PlasmicTextInput,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root",
      input: "input"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "input", "text", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  input: ["input"],
  text: ["text"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  startIconContainer: "div";
  input: "input";
  text: "div";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTextInput__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTextInput__VariantsArgs;
    args?: PlasmicTextInput__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTextInput__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTextInput__ArgsType,
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
          internalArgPropNames: PlasmicTextInput__ArgProps,
          internalVariantPropNames: PlasmicTextInput__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTextInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextInput";
  } else {
    func.displayName = `PlasmicTextInput.${nodeName}`;
  }
  return func;
}

export const PlasmicTextInput = Object.assign(
  // Top-level PlasmicTextInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    input: makeNodeComponent("input"),
    text: makeNodeComponent("text"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicTextInput
    internalVariantProps: PlasmicTextInput__VariantProps,
    internalArgProps: PlasmicTextInput__ArgProps,

    useBehavior
  }
);

export default PlasmicTextInput;
/* prettier-ignore-end */