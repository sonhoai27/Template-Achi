import * as React from "react";
import { SketchPicker } from "react-color";
import { connect } from "react-redux";
import {
  reSetCurrentEditorPhoto,
  reShowPhotoApp,
  reIsDanger,
  reIsSuccess
} from "../../../../reducers/init";
import { reUpdateCategory, reListCategory } from "../reBlog";
import { alias } from "../../../../utils/alias";
interface IProps {
  isShowingModal: any;
  reSetCurrentEditorPhoto: (editor: any) => void;
  reShowPhotoApp: (status: boolean) => void;
  category: any;
  resUpdateCategory: any;
  reUpdateCategory: (form, id)=> void;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
  reListCategory: ()=> void;
}
interface IState {
  category_id: number;
  category_alias: string;
  category_name: string;
  category_color: string;
  category_icon: string;
}
class DetailCategory extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      category_alias: this.props.category.category_alias,
      category_id: this.props.category.category_id,
      category_name: this.props.category.category_name,
      category_icon: this.props.category.category_icon,
      category_color: this.props.category.category_color
    }
  }
  handleChangeComplete = color => {
   try {
    this.setState({
      category_color: color.hex
    })
   }catch(e){

   }
  };
  onChange = (e: any) => {
    // @ts-ignore
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onUpdate = ()=> {
    const temp: any = document.getElementById('img-cover-blog-preview')
    this.props.reUpdateCategory({
      ...this.state,
      category_alias: alias(this.state.category_name),
      category_icon: temp.src,
    }, this.state.category_id)
  }
  componentDidUpdate(preProps){
    if(this.props.resUpdateCategory != preProps.resUpdateCategory){
      if (this.props.resUpdateCategory.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          this.props.isShowingModal()
          this.props.reListCategory()
        }, 2000);
      } else {
        this.props.reIsDanger(true);
        setTimeout(() => {
          this.props.reIsDanger(false);
          this.props.isShowingModal()
        }, 2000);
      }
    }
  }
  render() {
    return (
      <>
        <div
          style={{ display: "block", overflow: 'auto' }}
          className="modal fade in order-ebook"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={() => this.props.isShowingModal()}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title">Chi tiết</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-4">
                    <SketchPicker
                    color={
                      this.state.category_color === null || this.state.category_color === ""
                      ? '' : this.state.category_color
                    }
                      onChange={this.handleChangeComplete}
                    />
                  </div>
                  <div className="col-sm-8">
                    <div className="row">
                      <div className="form-group col-sm-6">
                        <label className="col-sm-12">Tên</label>
                        <div className="col-sm-12">
                          <input
                            onChange={this.onChange}
                            name="category_name"
                            className="form-control"
                            defaultValue={this.state.category_name}
                          />
                        </div>
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="col-sm-12">Màu</label>
                        <div className="col-sm-12">
                          <input
                            onChange={this.onChange}
                            name="category_color"
                            className="form-control"
                            value={this.state.category_color}
                          />
                        </div>
                      </div>
                      <div className="form-group col-sm-12">
                        <label className="col-sm-12">Hình cover</label>
                        <div
                          className="col-sm-12 cover-blog"
                          onClick={() => {
                            this.props.reShowPhotoApp(true);
                            this.props.reSetCurrentEditorPhoto(
                              "img-cover-blog-preview"
                            );
                          }}
                        >
                          <i className="ti-upload" />
                          <img
                            src={this.state.category_icon}
                            id="img-cover-blog-preview"
                            className="img-responsive"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => this.props.isShowingModal()}
                  type="button"
                  className="btn btn-default waves-effect"
                  data-dismiss="modal"
                >
                  Thoát
                </button>
                <button
                  onClick={this.onUpdate}
                  type="button"
                  className="btn btn-danger waves-effect waves-light"
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-backdrop fade in" />
      </>
    );
  }
}
const mapStateToProps = storeState => ({
  resListStatus: storeState.reBlog.resListStatus,
  resUpdateCategory: storeState.reBlog.resUpdateCategory
});
const mapDispatchToProps = {
  reSetCurrentEditorPhoto,
  reShowPhotoApp,
  reUpdateCategory,
  reIsDanger,
  reIsSuccess,
  reListCategory
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailCategory);
