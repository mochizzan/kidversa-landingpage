class GaleriController < ApplicationController
  def index
    image_files = [
      {
        title: "BBGTK Jatim",
        src: "bbgtk_jatim.jpeg"
      },
      {
        title: "Gugus PAUD Sindangjaya",
        src: "gugus_paud_sindangjaya.jpeg"
      },
      {
        title: "TKIT Bakti Instani",
        src: "tk_it_bhakti_insani.jpeg"
      },
      {
        title: "TK Langgeng Garijita",
        src: "tk_langgeng_garjita.jpeg"
      },
      {
        title: "Yogyakarta",
        src: "Yogyakarta.jpeg"
      }
    ]


    gallery_url = image_files.map do |file|
      { title: file[:title], url: helpers.image_path(file[:src]) }
    end

    render inertia: {
      gallery_url: gallery_url
    }
  end
end
