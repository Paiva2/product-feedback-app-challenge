-- RenameIndex
ALTER TABLE `Comment` RENAME INDEX `Comment_postsId_fkey` TO `Comment_postsId_idx`;

-- RenameIndex
ALTER TABLE `Reply` RENAME INDEX `Reply_commentId_fkey` TO `Reply_commentId_idx`;

-- RenameIndex
ALTER TABLE `Reply` RENAME INDEX `Reply_postsId_fkey` TO `Reply_postsId_idx`;
