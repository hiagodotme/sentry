import {Flex} from 'grid-emotion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

import {t} from 'app/locale';
import Link from 'app/components/link';
import space from 'app/styles/space';
import withOrganization from 'app/utils/withOrganization';

const HealthNavigationMenu = styled(
  withOrganization(
    class extends React.Component {
      render() {
        let {className, organization} = this.props;
        return (
          <div className={className}>
            <NavigationGroup title={t('Monitoring')}>
              <NavItem to={`/organizations/${organization.slug}/health/`}>
                {t('Overview')}
              </NavItem>
              <NavItem to={`/organizations/${organization.slug}/health/errors/`}>
                {t('Errors')}
              </NavItem>
              <NavItem to={`/organizations/${organization.slug}/health/transactions/`}>
                {t('Transaction')}
              </NavItem>
            </NavigationGroup>
          </div>
        );
      }
    }
  )
)`
  border-right: 1px solid ${p => p.theme.borderLight};
  width: 180px;
  flex-shrink: 0;
`;

export default HealthNavigationMenu;

const NavigationGroup = styled(
  class extends React.Component {
    static propTypes = {
      title: PropTypes.node,
    };

    render() {
      let {className, title, children} = this.props;
      return (
        <div className={className}>
          <Title>{title}</Title>
          {children}
        </div>
      );
    }
  }
)`
  display: flex;
  flex-direction: column;
`;

const Title = styled('div')`
  color: ${p => p.theme.gray1};
  font-size: 0.9em;
  padding: ${space(2)};
  margin-bottom: ${space(0)};
  text-transform: uppercase;
`;

const NavItem = styled(Link)`
  padding: 0 ${space(2)};
`;