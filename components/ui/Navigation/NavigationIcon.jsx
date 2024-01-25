const NavbarIcon = ({iconName, iconAlt}) => {
  return (
    <div
      className="p-2.5"
      role="button"
    >
      <img
        src={`/${iconName}.svg`}
        alt={`${iconAlt}`}
      />
    </div>
  );
};

export default NavbarIcon;