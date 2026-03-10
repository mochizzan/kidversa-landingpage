require "test_helper"

class GaleriControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get galeri_index_url
    assert_response :success
  end
end
