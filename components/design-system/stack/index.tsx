// borrowed from @sarimabbas
// motivation for these components is well put here:
// https://mxstbr.com/thoughts/margin/

import * as React from 'react';
import { Property } from 'csstype';
import { forwardRef } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

export interface StackProps extends React.HTMLProps<HTMLDivElement> {
    alignContent?: Property.AlignContent;
    alignItems?: Property.AlignItems;
    justifyContent?: Property.JustifyContent;
    justifyItems?: Property.JustifyItems;
    gap?: Property.Gap;
    width?: Property.Width;
    height?: Property.Height;
}

export type VStackProps = StackProps;

export const VStack = forwardRef<HTMLDivElement, VStackProps>(
    (props: VStackProps, ref) => {
        const {
            // flexbox shorthands for convenience
            alignContent,
            alignItems,
            justifyContent,
            justifyItems,
            gap,
            // other convenient properties
            width,
            height,
            // overrides
            className,
            style,
            // everything else
            children,
            ...delegated
        } = props;
        return (
            <div
                {...delegated}
                className={cx(styles.vstack, className)}
                style={{
                    alignContent,
                    alignItems,
                    justifyContent,
                    justifyItems,
                    gap,
                    width,
                    height,
                    ...style,
                }}
                ref={ref}
            >
                {children}
            </div>
        );
    }
);

VStack.displayName = 'VStack';

export interface HStackProps extends StackProps {
    flexWrap?: Property.FlexWrap;
}

export const HStack = forwardRef<HTMLDivElement, HStackProps>(
    (props: HStackProps, ref) => {
        const {
            // flexbox shorthands for convenience
            alignContent,
            alignItems,
            justifyContent,
            justifyItems,
            gap,
            flexWrap,
            // other convenient properties
            width,
            height,
            // overrides
            className,
            style,
            // everything else
            children,
            ...delegated
        } = props;
        return (
            <div
                {...delegated}
                className={cx(styles.hstack, className)}
                style={{
                    alignContent,
                    alignItems,
                    justifyContent,
                    justifyItems,
                    gap,
                    flexWrap,
                    width,
                    height,
                    ...style,
                }}
                ref={ref}
            >
                {children}
            </div>
        );
    }
);

HStack.displayName = 'HStack';
