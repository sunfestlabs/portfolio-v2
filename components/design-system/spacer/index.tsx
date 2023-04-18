// Borrowing from @sarimabbas, who adopted this from https://www.joshwcomeau.com/react/modern-spacer-gif/
// motivation is also well put here:
// https://mxstbr.com/thoughts/margin/


export interface SpacerProps
    extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
    size: string | number;
    axis?: 'horizontal' | 'vertical';
}

const Spacer = (props: SpacerProps): JSX.Element => {
    const { size, axis, style, ...delegated } = props;

    const width = axis === 'vertical' ? 1 : size;
    const height = axis === 'horizontal' ? 1 : size;

    return (
        <span
            {...delegated}
            style={{
                display: 'block',
                width,
                minWidth: width,
                height,
                minHeight: height,
                ...style,
            }}
        />
    );
};

export default Spacer;
