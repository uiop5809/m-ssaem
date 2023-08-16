/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import COLOR from "../../styles/color";
import { css } from "@emotion/react";
import FONT from "../../styles/font";
import Profile from "../../components/profile/Profile";
import { useDeleteDebate } from "../../hooks/debate/useDeleteDebate";
import VoteItemList from "../../components/debate/vote/VoteItemList";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDebateDetail } from "../../hooks/debate/useDetailDebate";
import CommentComponent from "../../components/board/comment/Comment";
import { useDebateComment } from "../../hooks/debate/comment/useDebateComment";
import { useDebateBestComment } from "../../hooks/debate/comment/useDebateBestComment";
import { useDebateCommentCreate } from "../../hooks/debate/comment/useDebateCommentCreate";
import RedButton from "../../components/button/plusbutton/RedButton";
import DeleteModal from "../../components/modal/DeletModal";
import PageDebate from "../../components/debate/pageMapingDebate/PageDebate";
import CommentCreate from "../../components/board/comment/CommentCreate";
import ReportModal from "../../components/modal/ReportModal";
import ShareModal from "../../components/modal/ShareModal";

const DetailDebatePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const debateId = Number(id);
  const { debate } = useDebateDetail(debateId);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDeleteOpen = () => {
    setIsDeleteModalOpen(true);
  };
  const handleDeleteClose = () => {
    setIsDeleteModalOpen(false);
  };

  const { comments } = useDebateComment(debateId, 0, 10);
  const { bestComments } = useDebateBestComment(debateId);
  const [content, setContent] = useState("");

  const [replyContent, setReplyContent] = useState("");
  const [replyCommentId, setReplyCommentId] = useState(0);
  const [replyCommentOpen, setReplyCommentOpen] = useState(false);

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleReport = () => {
    setIsReportModalOpen(true);
  };
  const handleShare = () => {
    setIsShareModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsReportModalOpen(false);
    setIsShareModalOpen(false);
  };

  const deleteMutation = useDeleteDebate(debateId);
  const handleDebateDelete = () => {
    deleteMutation.mutate();
    navigate(-1);
  };

  const formData = new FormData();
  formData.append(
    "postDiscussionCommentReq",
    new Blob([JSON.stringify(content)], { type: "application/json" }),
  );

  const replyFormData = new FormData();
  replyFormData.append(
    "postDiscussionCommentReq",
    new Blob([JSON.stringify(replyContent)], { type: "application/json" }),
  );

  const createMutation = useDebateCommentCreate(debateId, formData);
  const createReplyMutation = useDebateCommentCreate(
    debateId,
    replyFormData,
    replyCommentId,
  );

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMutation.mutate();
    setContent("");
  };
  const handleReplyCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createReplyMutation.mutate();
    setReplyContent("");
    setReplyCommentOpen(false);
  };

  const handleCommentClick = (commentId: number) => {
    setReplyCommentOpen(!replyCommentOpen);
    setReplyCommentId(commentId);
  };

  return (
    <div css={ContainerCSS}>
      <Container>
        {debate && (
          <>
            {debate.isEditAllowed && (
              <div css={buttonBoxCSS}>
                <Button
                  onClick={() => navigate(`/debate/${id}/update`)}
                  addCSS={updateButtonCSS}
                >
                  수정
                </Button>
                <Button onClick={handleDeleteOpen}>삭제</Button>
              </div>
            )}

            <div css={detailCSS}>
              <div css={detailHeaderCSS}>
                <Profile
                  id={debate.discussionSimpleInfo.memberSimpleInfo.id}
                  image={
                    debate.discussionSimpleInfo.memberSimpleInfo.profileImgUrl
                  }
                  name={debate.discussionSimpleInfo.memberSimpleInfo.nickName}
                  mbti={debate.discussionSimpleInfo.memberSimpleInfo.mbti}
                  badge={debate.discussionSimpleInfo.memberSimpleInfo.badge}
                />
                <div css={dateCSS}>{debate.discussionSimpleInfo.createdAt}</div>
              </div>
              <div css={titleCSS}>{debate.discussionSimpleInfo.title}</div>
              <div css={contentCSS}>{debate.discussionSimpleInfo.content}</div>
              <VoteItemList
                options={debate.discussionSimpleInfo.options}
                debateId={debate.discussionSimpleInfo.id}
              />
              <div css={BottomdetailCSS}>
                <RedButton
                  count={`${debate.discussionSimpleInfo.participantCount}명이 참여중`}
                ></RedButton>
              </div>
              <div css={commentTextCSS}>
                전체 댓글 {comments ? comments.result.length : 0}개
              </div>
            </div>
            <div css={commentBoxCSS}>
              <div>전체 댓글 {comments ? comments.result.length : 0}개</div>
              <div css={shareDeclarationCSS}>
                <div css={shareCSS} onClick={handleShare}>
                  공유
                </div>
                <div css={declarationCSS} onClick={handleReport}>
                  신고
                </div>
              </div>
            </div>
            <div>
              {/* {comments &&
                comments.result.map((comment) => (
                  <div key={comment.commentId}>
                    {comment.parentId === 0 && (
                      <>
                        <CommentComponent
                          comment={comment}
                          onClick={() => handleCommentClick(comment.commentId)}
                        />
                        {comments.result.map(
                          (replyComment) =>
                            replyComment.parentId === comment.commentId && (
                              <CommentComponent
                                comment={replyComment}
                                onClick={() =>
                                  handleCommentClick(replyComment.parentId)
                                }
                                reply={true}
                              />
                            ),
                        )}
                      </>
                    )}
                    {replyCommentOpen &&
                      replyCommentId === comment.commentId && (
                        <CommentCreate
                          onSubmit={handleReplyCommentSubmit}
                          content={replyContent}
                          setContent={setReplyContent}
                          addCSS={replyComment}
                          reply={true}
                        />
                      )}
                  </div>
                ))} */}
            </div>
            <div css={commentTextCSS}>댓글 쓰기</div>
            <hr css={hrCSS} />
            {/* <CommentCreate
              onSubmit={handleCommentSubmit}
              content={content}
              setContent={setContent}
            /> */}
          </>
        )}
      </Container>
      {isReportModalOpen && (
        <ReportModal
          isOpen={isReportModalOpen}
          onClose={handleCloseModal}
          onClick={() => {}}
          isType="DISCUSSION"
        />
      )}
      {isShareModalOpen && (
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={handleCloseModal}
          url={`/discussions/${debateId}`}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={handleDeleteClose}
          onClick={handleDebateDelete}
        />
      )}

      <PageDebate pathMov={"discusstion"} />
    </div>
  );
};

export default DetailDebatePage;

const ContainerCSS = css`
  margin-top: 1rem;
`;
const detailCSS = css`
  // padding: 1.2rem 0;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid ${COLOR.MAIN};
`;

const detailHeaderCSS = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const dateCSS = css`
  font-size: ${FONT.SIZE.BODY};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${COLOR.GRAY2};
`;

const titleCSS = css`
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.BOLD};
  margin-bottom: 0.8rem;
`;

const contentCSS = css`
  font-size: ${FONT.SIZE.HEADLINE};
  font-weight: ${FONT.WEIGHT.REGULAR};
  padding-bottom: 3rem;
  line-height: 1.4rem;
`;

const commentTextCSS = css`
  font-size: ${FONT.SIZE.HEADLINE};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${COLOR.MAINDARK};
  margin-top: 3rem;
`;

const hrCSS = css`
  border: 1px solid ${COLOR.MAIN};
  margin: 1rem 0;
`;

const buttonBoxCSS = css`
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
  align-items: center;
`;

const updateButtonCSS = css`
  margin-right: 0.5rem;
  background: ${COLOR.MAIN};
`;

const BottomdetailCSS = css`
  margin: 1rem 0 1.2rem 0;
  display: flex;
  align-items: center;
  font-size: ${FONT.SIZE.HEADLINE};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${COLOR.GRAY2};
`;

const commentBoxCSS = css`
  display: flex;
  justify-content: space-between;
  font-size: ${FONT.SIZE.HEADLINE};
  font-weight: ${FONT.WEIGHT.BOLD};
`;

const shareDeclarationCSS = css`
  display: flex;
  color: ${COLOR.GRAY2};
`;

const shareCSS = css`
  margin-right: 0.5rem;
  cursor: pointer;
`;

const declarationCSS = css`
  cursor: pointer;
`;

const replyComment = css`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
