import React, { useContext } from "react";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";

import {
  Home,
  MenuCloseIcon,
  MenuOpenIcon,
} from "@/components/shared/UI/icons";
import { LayoutContext } from "@/context/LayoutContext";
import FDIconButton from "@/template/components/FDIconButton/FDIconButton";
import { logoutAction } from "@/actions/logoutAction";

const DashboardNavbar = () => {
  const pathname = usePathname();
  const splittedPathnames = pathname.split("/").splice(1);
  const { userInformation, sideBar, setSideBar } = useContext(LayoutContext);

  return (
    <Navbar isBordered height="80px" maxWidth="full">
      <NavbarBrand>
        <Breadcrumbs>
          <BreadcrumbItem key={"home"} href="/">
            {<Home />}
          </BreadcrumbItem>

          {splittedPathnames?.map((item, index) => (
            <BreadcrumbItem key={index}>{item}</BreadcrumbItem>
          ))}
        </Breadcrumbs>
      </NavbarBrand>
      <NavbarContent as="div" className="flex items-center h-fit" justify="end">
        <FDIconButton onClick={() => setSideBar((prev) => !prev)}>
          {sideBar ? <MenuCloseIcon /> : <MenuOpenIcon />}
        </FDIconButton>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <span className="flex gap-4 cursor-pointer items-center">
              <h2 className="hidden md:block">
                {userInformation?.name} {userInformation?.lastName}
              </h2>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src={userInformation?.avatar ?? "/default-avatar.jpg"}
              />
            </span>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" className="p-0" color="danger">
              <form action={logoutAction}>
                <FDIconButton className="w-full h-full p-0" type="submit">
                  <p className="text-start w-full p-2">Log Out</p>
                </FDIconButton>
              </form>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default DashboardNavbar;
