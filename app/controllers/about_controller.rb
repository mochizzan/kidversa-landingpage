class AboutController < ApplicationController
  def index
    image_team = [
      {
        kategori: "Manajemen Utama",
        anggota: [
          {
            nama: "Dr. Bayu Rima Aditya, S.T., M.T. ",
            jabatan: "Team Leader",
            profile: "pak_bayu.png"
          }
        ]
      },
      {
        kategori: "Penasihat & Perancang Strategi",
        anggota: [
          {
            nama: "Yudha Ginanjar S.T",
            jabatan: "Technical Advisor",
            profile: "pak_yudha.png"

          },
          {
            nama: "Andrisyah M.Pd",
            jabatan: "Pedagogy Designer",
            profile: "bu_anis.png"
          }
        ]
      },
      {
        kategori: "Pelaksana Teknis",
        anggota: [
          {
            nama: "Yanuar Rahman, S.Ds., M.Ds.",
            jabatan: "Visual Designer",
            profile: "pa_yanuar.png"
          },
          {
            nama: "Aditya Permadi M.T",
            jabatan: "E-Learning Developer",
            profile: "pak_adit.png"
          },
          {
            nama: "Atthariq Insanulhaq Supiana",
            jabatan: "Game Development",
            profile: "thoriq.png"
          },
          {
            nama: "Mochamad Izzan Firasyansyah",
            jabatan: "Full Stack Developer",
            profile: "izzan.png"
          },
          {
            nama: "Fatih Mutrovin",
            jabatan: "Business Development",
            profile: "negan.png"
          },
          {
            nama: "Aziizah Nurul Amini",
            jabatan: "Business Development",
            profile: "aziizah.png"
          },
          {
            nama: "Nadyatul Fakhirah",
            jabatan: "Business Development",
            profile: "nadya.png"
          }
        ]
      }
    ]

    data_image_team = image_team.map do |v|
        {
          kategori: v[:kategori],
          anggota: v[:anggota].map do |anggota|
            profile_path = anggota[:profile].blank? ? helpers.image_path("blank_profile.jpeg") : helpers.image_path("team/#{anggota[:profile]}")
            {
              nama: anggota[:nama],
              jabatan: anggota[:jabatan],
              image: profile_path
            }
          end
        }
    end

    render inertia: {
      data_image_team: data_image_team
    }
  end
end
