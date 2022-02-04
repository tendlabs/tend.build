import styled from 'styled-components'
import { theme } from '../../styles/theme';

const StyledText = styled.span`
  text-decoration: none;
  font-family: ${({ theme }) => theme.text.family.regular};

  color: ${(props) => props.lightened ? props.theme.color.opacity.light24
    : props.dark ? props.theme.color.text.dark
      : props.emphasis ? props.theme.color.primary.blue
        : props.theme.color.text.light
  };

  font-weight: ${(props) => (props.title && props.bold) ? props.theme.text.weight.title.bold
    : (props.bold) ? props.theme.text.weight.body.bold
      : props.theme.text.weight.body.regular
  };
  font-size: ${(props) => (props.title && props.super) ? props.theme.text.size.title.super
    : (props.title && props.headline) ? props.theme.text.size.title.headline
      : (props.title && props.large) ? props.theme.text.size.title.large
        : (props.title && props.regular) ? props.theme.text.size.title.regular
          : (props.title && props.small) ? props.theme.text.size.title.small
            : (props.title) ? props.theme.text.size.title.regular
              : (props.body && props.large) ? props.theme.text.size.body.large
                : (props.body && props.regular) ? props.theme.text.size.body.regular
                  : (props.body && props.small) ? props.theme.text.size.body.small
                    : (props.body && props.mini) ? props.theme.text.size.body.mini
                      : (props.body) ? props.theme.text.size.body.regular
                        : null
  }px;
  line-height: ${(props) => (props.title && props.super) ? props.theme.text.lineHeight.title.super
    : (props.title && props.headline) ? props.theme.text.lineHeight.title.headline
      : (props.title && props.large) ? props.theme.text.lineHeight.title.large
        : (props.title && props.regular) ? props.theme.text.lineHeight.title.regular
          : (props.title && props.small) ? props.theme.text.lineHeight.title.small
            : (props.title) ? props.theme.text.lineHeight.title.regular
              : (props.body && props.large) ? props.theme.text.lineHeight.body.large
                : (props.body && props.regular) ? props.theme.text.lineHeight.body.regular
                  : (props.body && props.small) ? props.theme.text.lineHeight.body.small
                    : (props.body && props.mini) ? props.theme.text.lineHeight.body.mini
                      : (props.body) ? props.theme.text.lineHeight.body.regular
                        : null
  }px;
  text-align: ${(props) => props.center ? 'center' : 'auto'};
`;

const Text = ({
  children,
  ...rest
}) => {
  return (
    <StyledText {...rest}>
      {children}
    </StyledText>
  )
}

export default Text
