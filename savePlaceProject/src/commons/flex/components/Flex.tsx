import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { styled } from '@stitches/react';
import { BasisFlexProps } from '@/commons/flex/types/Flex.type.ts';

const FlexBox = React.forwardRef<HTMLDivElement,PropsWithChildren<BasisFlexProps> & HTMLAttributes<HTMLDivElement>>(
    ({
      gap,
      padding,style,height,width,children, className
     }, ref) => {
        console.log('gap=',gap);
        console.log('width=',width);
        console.log('height',height);
        console.log('padding=',padding);
        return (
    <div className={className}  style={{gap, width, height, padding, ...style}} ref={ref}>
        {children}
    </div>
)});
FlexBox.displayName = 'FlexBox';

const Flex = styled(FlexBox);

export {Flex}

