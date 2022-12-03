import React, { useState, useContext } from 'react';

const ModalContext = React.createContext()

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    active: false,
    pic: "/pfxbcqjwjgn91.jpg",
    title: "Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec massa. A lacus vestibulum sed arcu non odio euismod lacinia. Nibh tellus molestie nunc non. Vitae et leo duis ut diam quam nulla porttitor. Aliquam faucibus purus in massa tempor nec feugiat nisl. Tortor dignissim convallis aenean et tortor at. Ipsum a arcu cursus vitae. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Neque convallis a cras semper. Ipsum a arcu cursus vitae congue mauris rhoncus. Aliquam eleifend mi in nulla. Pharetra convallis posuere morbi leo urna. Congue quisque egestas diam in arcu cursus euismod quis. Convallis posuere morbi leo urna molestie at elementum eu. Mus mauris vitae ultricies leo integer. Id eu nisl nunc mi ipsum faucibus vitae. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Elit duis tristique sollicitudin nibh sit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Duis tristique sollicitudin nibh sit amet commodo nulla. Non nisi est sit amet facilisis magna etiam tempor orci. Congue nisi vitae suscipit tellus mauris a. Volutpat odio facilisis mauris sit amet massa vitae tortor. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Hendrerit gravida rutrum quisque non tellus orci. Ultricies leo integer malesuada nunc vel. Quis hendrerit dolor magna eget est lorem ipsum. In eu mi bibendum neque. Consectetur a erat nam at lectus. Vel fringilla est ullamcorper eget nulla. Viverra justo nec ultrices dui sapien eget. Commodo elit at imperdiet dui accumsan sit amet nulla. Nunc eget lorem dolor sed viverra ipsum. Vitae justo eget magna fermentum iaculis eu non diam. A diam maecenas sed enim ut sem viverra. Etiam tempor orci eu lobortis elementum. Malesuada nunc vel risus commodo. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. In ante metus dictum at tempor commodo ullamcorper. Ut tortor pretium viverra suspendisse. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Urna cursus eget nunc scelerisque viverra. In cursus turpis massa tincidunt dui ut ornare lectus sit. Risus pretium quam vulputate dignissim suspendisse in est ante in. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. In nisl nisi scelerisque eu ultrices. Consequat mauris nunc congue nisi. Convallis a cras semper auctor neque vitae tempus. Imperdiet nulla malesuada pellentesque elit eget. Tortor consequat id porta nibh venenatis cras. Sed euismod nisi porta lorem mollis aliquam ut. Nisl vel pretium lectus quam id leo in. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Aliquet risus feugiat in ante metus dictum at. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Enim ut tellus elementum sagittis. At consectetur lorem donec massa sapien faucibus. Sit amet nulla facilisi morbi. Sed viverra tellus in hac."
  })

  const openModal = () => {
    setModal({...modal, active: true})
  };
  const closeModal = () => {
    setModal({...modal, active: false})
  };

  return (
    <ModalContext.Provider value={{modal, setModal, openModal, closeModal}}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  return useContext(ModalContext)
}

export { ModalContext, ModalProvider }