import * as React from "react";
import { connect } from "react-redux";
import {
  reSetCurrentEditorPhoto,
  reShowPhotoApp,
  reIsDanger,
  reIsSuccess
} from "../../../../reducers/init";
import { reListAuthor, reAddAuthor } from "../reBlog";
import { alias } from "../../../../utils/alias";
interface IProps {
  isShowingModal: any;
  reSetCurrentEditorPhoto: (editor: any) => void;
  reShowPhotoApp: (status: boolean) => void;
  resAddAuthor: any;
  reAddAuthor: (form)=> void;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
  reListAuthor: ()=> void;
}
interface IState {
  author_name: string;
  author_intro: string;
}
class AddAuthor extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      author_name: '',
      author_intro: ''
    }
  }

  onChange = (e: any) => {
    // @ts-ignore
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onUpdate = ()=> {
    const temp: any = document.getElementById('img-cover-blog-preview')
    this.props.reAddAuthor({
      ...this.state,
      author_alias: alias(this.state.author_name),
      author_avatar: temp.src,
    })
  }
  componentDidUpdate(preProps){
    console.log(this.props.resAddAuthor)
    if(this.props.resAddAuthor!= preProps.resAddAuthor){
      if (this.props.resAddAuthor.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          this.props.isShowingModal()
          this.props.reListAuthor()
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
                <h4 className="modal-title">Thêm mới</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="form-group col-sm-6">
                        <label className="col-sm-12">Tên</label>
                        <div className="col-sm-12">
                          <input
                            onChange={this.onChange}
                            name="author_name"
                            className="form-control"
                            defaultValue={this.state.author_name}
                          />
                        </div>
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="col-sm-12">Intro</label>
                        <div className="col-sm-12">
                          <input
                            onChange={this.onChange}
                            name="author_intro"
                            className="form-control"
                            value={this.state.author_intro}
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
  resAddAuthor: storeState.reBlog.resAddAuthor
});
const mapDispatchToProps = {
  reSetCurrentEditorPhoto,
  reShowPhotoApp,
  reAddAuthor,
  reIsDanger,
  reIsSuccess,
  reListAuthor
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAuthor);
