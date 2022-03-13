import {
  AppBar,
  Container,
  Toolbar,
  Link,
  Stack,
  Button,
  Menu,
  MenuItem,
  Box,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import NextLink from 'next/link';
import { useState, Fragment } from 'react';

// These should contain a name and either a link or a list 'children' of {name, link} objects
const navigationLinks = [
  { name: 'Join the Team', link: '/joinus' },
  { name: 'Sponsors', link: '/partners' },
  { name: 'Newsletters', link: '/posts' },
  {
    name: 'Teams',
    children: [
      {
        name: 'Team 2022',
        link: '/team/2022',
      },
      {
        name: 'Team 2021',
        link: '/team/2021',
      },
      {
        name: 'Team 2020',
        link: '/team/2020',
      },
      {
        name: 'Team 2019',
        link: '/team/2019',
      },
    ],
  },
  { name: 'Contact Us', link: '/contact' },
];

const ButtonLink = ({ name, url, sx, small }) => (
  <NextLink href={url} passHref>
    <Button
      component="a"
      color="inherit"
      sx={
        small
          ? { height: 40, fontSize: 'small', ...sx }
          : { height: 60, fontSize: 'medium', ...sx }
      }
    >
      {name}
    </Button>
  </NextLink>
);

const DesktopLinks = () => {
  const [anchorElements, setAnchorElements] = useState({});
  return (
    <Stack
      sx={{ display: { xs: 'none', md: 'flex' } }}
      direction="row"
      justifyContent="flex-end"
    >
      {navigationLinks.map((link) =>
        link.link ? (
          <ButtonLink
            name={link.name}
            url={link.link}
            key={link.name}
            sx={{ height: 1 }}
          />
        ) : (
          <Box key={link.name}>
            <Button
              color="inherit"
              onClick={(evt) =>
                setAnchorElements({
                  ...anchorElements,
                  [link.name]: evt.target,
                })
              }
              sx={{ fontSize: 'medium' }}
            >
              {link.name} ▾
            </Button>
            <Menu
              id={`navigation-menu-${link.name}`}
              anchorEl={anchorElements[link.name]}
              open={!!anchorElements[link.name]}
              onClose={() =>
                setAnchorElements({
                  ...anchorElements,
                  [link.name]: null,
                })
              }
            >
              {link.children.map((childLink) => (
                <MenuItem
                  key={childLink.name}
                  onClick={() =>
                    setAnchorElements({
                      ...anchorElements,
                      [link.name]: null,
                    })
                  }
                >
                  <NextLink href={childLink.link} passHref>
                    <Link underline="none" color="inherit">
                      {childLink.name}
                    </Link>
                  </NextLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )
      )}
    </Stack>
  );
};

const MobileDrawer = ({ open, onClose }) => (
  <Drawer
    anchor={'right'}
    open={open}
    onClose={onClose}
    PaperProps={{
      sx: { backgroundColor: '#333', color: 'white' },
    }}
  >
    {navigationLinks.map((link) =>
      link.link ? (
        <ButtonLink name={link.name} url={link.link} key={link.name} />
      ) : (
        <Fragment key={link.name}>
          <ButtonLink name={link.name} url={link.children[0].link} />
          {link.children.map((childLink) => (
            <ButtonLink
              small
              name={childLink.name}
              url={childLink.link}
              key={childLink.name}
            />
          ))}
        </Fragment>
      )
    )}
  </Drawer>
);

const NavBar = ({ allowContentBehind = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(1, 2, 11, 0.7)',
          backdropFilter: 'blur(4px)',
          boxShadow: '2px 2px 10px #1a1a1a',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <NextLink href="/" passHref>
              <Link>
                <Image
                  src="/images/logo-header.png"
                  alt="Shift Hyperloop logo"
                  height={58}
                  width={224}
                />
              </Link>
            </NextLink>
            <DesktopLinks />
            <Button
              color="inherit"
              sx={{ display: { md: 'none' } }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuIcon />
            </Button>
            <MobileDrawer
              open={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
            />
          </Toolbar>
        </Container>
      </AppBar>
      {allowContentBehind || <Toolbar />}
    </>
  );
};

export default NavBar;
