import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postAuthRegister: build.mutation<
      PostAuthRegisterApiResponse,
      PostAuthRegisterApiArg
    >({
      query: (queryArg) => ({
        url: `/Auth/register`,
        method: "POST",
        body: queryArg.userRegisterDto,
      }),
    }),
    postAuthLogin: build.mutation<
      PostAuthLoginApiResponse,
      PostAuthLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/Auth/login`,
        method: "POST",
        body: queryArg.userLoginDto,
      }),
    }),
    getApiCharacterGetAll: build.query<
      GetApiCharacterGetAllApiResponse,
      GetApiCharacterGetAllApiArg
    >({
      query: () => ({ url: `/api/Character/GetAll` }),
    }),
    getApiCharacterById: build.query<
      GetApiCharacterByIdApiResponse,
      GetApiCharacterByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/Character/${queryArg.id}` }),
    }),
    deleteApiCharacterById: build.mutation<
      DeleteApiCharacterByIdApiResponse,
      DeleteApiCharacterByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Character/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    postApiCharacter: build.mutation<
      PostApiCharacterApiResponse,
      PostApiCharacterApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Character`,
        method: "POST",
        body: queryArg.addCharacterDto,
      }),
    }),
    putApiCharacter: build.mutation<
      PutApiCharacterApiResponse,
      PutApiCharacterApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Character`,
        method: "PUT",
        body: queryArg.updateCharacterDto,
      }),
    }),
    postApiCharacterSkill: build.mutation<
      PostApiCharacterSkillApiResponse,
      PostApiCharacterSkillApiArg
    >({
      query: (queryArg) => ({
        url: `/api/Character/Skill`,
        method: "POST",
        body: queryArg.addCharacterSkillDto,
      }),
    }),
    postFightWeapon: build.mutation<
      PostFightWeaponApiResponse,
      PostFightWeaponApiArg
    >({
      query: (queryArg) => ({
        url: `/Fight/Weapon`,
        method: "POST",
        body: queryArg.weaponAttackDto,
      }),
    }),
    postFightSkill: build.mutation<
      PostFightSkillApiResponse,
      PostFightSkillApiArg
    >({
      query: (queryArg) => ({
        url: `/Fight/Skill`,
        method: "POST",
        body: queryArg.skillAttackDto,
      }),
    }),
    postFight: build.mutation<PostFightApiResponse, PostFightApiArg>({
      query: (queryArg) => ({
        url: `/Fight`,
        method: "POST",
        body: queryArg.fightRequestDto,
      }),
    }),
    getFight: build.query<GetFightApiResponse, GetFightApiArg>({
      query: () => ({ url: `/Fight` }),
    }),
    postWeapon: build.mutation<PostWeaponApiResponse, PostWeaponApiArg>({
      query: (queryArg) => ({
        url: `/Weapon`,
        method: "POST",
        body: queryArg.addWeaponDto,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as rpgApi };
export type PostAuthRegisterApiResponse =
  /** status 200 Success */ Int32ServiceResponse;
export type PostAuthRegisterApiArg = {
  userRegisterDto: UserRegisterDto;
};
export type PostAuthLoginApiResponse =
  /** status 200 Success */ StringServiceResponse;
export type PostAuthLoginApiArg = {
  userLoginDto: UserLoginDto;
};
export type GetApiCharacterGetAllApiResponse =
  /** status 200 Success */ GetCharacterDtoListServiceResponse;
export type GetApiCharacterGetAllApiArg = void;
export type GetApiCharacterByIdApiResponse =
  /** status 200 Success */ GetCharacterDtoServiceResponse;
export type GetApiCharacterByIdApiArg = {
  id: number;
};
export type DeleteApiCharacterByIdApiResponse =
  /** status 200 Success */ GetCharacterDtoListServiceResponse;
export type DeleteApiCharacterByIdApiArg = {
  id: number;
};
export type PostApiCharacterApiResponse =
  /** status 200 Success */ GetCharacterDtoListServiceResponse;
export type PostApiCharacterApiArg = {
  addCharacterDto: AddCharacterDto;
};
export type PutApiCharacterApiResponse =
  /** status 200 Success */ GetCharacterDtoServiceResponse;
export type PutApiCharacterApiArg = {
  updateCharacterDto: UpdateCharacterDto;
};
export type PostApiCharacterSkillApiResponse =
  /** status 200 Success */ GetCharacterDtoServiceResponse;
export type PostApiCharacterSkillApiArg = {
  addCharacterSkillDto: AddCharacterSkillDto;
};
export type PostFightWeaponApiResponse =
  /** status 200 Success */ AttackResultDtoServiceResponse;
export type PostFightWeaponApiArg = {
  weaponAttackDto: WeaponAttackDto;
};
export type PostFightSkillApiResponse =
  /** status 200 Success */ AttackResultDtoServiceResponse;
export type PostFightSkillApiArg = {
  skillAttackDto: SkillAttackDto;
};
export type PostFightApiResponse =
  /** status 200 Success */ FightResultDtoServiceResponse;
export type PostFightApiArg = {
  fightRequestDto: FightRequestDto;
};
export type GetFightApiResponse =
  /** status 200 Success */ HighscoreDtoListServiceResponse;
export type GetFightApiArg = void;
export type PostWeaponApiResponse =
  /** status 200 Success */ GetCharacterDtoServiceResponse;
export type PostWeaponApiArg = {
  addWeaponDto: AddWeaponDto;
};
export type Int32ServiceResponse = {
  data?: number;
  success?: boolean;
  message?: string | null;
};
export type UserRegisterDto = {
  username?: string | null;
  password?: string | null;
};
export type StringServiceResponse = {
  data?: string | null;
  success?: boolean;
  message?: string | null;
};
export type UserLoginDto = {
  username?: string | null;
  password?: string | null;
};
export type RpgClass = "Knight" | "Mage" | "Cleric";
export type GetWeaponDto = {
  name?: string | null;
  damage?: number;
};
export type GetSkillDto = {
  name?: string | null;
  damage?: number;
};
export type GetCharacterDto = {
  id?: number;
  name?: string | null;
  hitPoints?: number;
  strength?: number;
  defense?: number;
  intelligence?: number;
  class?: RpgClass;
  weapon?: GetWeaponDto;
  skills?: GetSkillDto[] | null;
  fights?: number;
  victories?: number;
  defeats?: number;
};
export type GetCharacterDtoListServiceResponse = {
  data?: GetCharacterDto[] | null;
  success?: boolean;
  message?: string | null;
};
export type GetCharacterDtoServiceResponse = {
  data?: GetCharacterDto;
  success?: boolean;
  message?: string | null;
};
export type AddCharacterDto = {
  name?: string | null;
  hitPoints?: number;
  strength?: number;
  defense?: number;
  intelligence?: number;
  class?: RpgClass;
};
export type UpdateCharacterDto = {
  id?: number;
  name?: string | null;
  hitPoints?: number;
  strength?: number;
  defense?: number;
  intelligence?: number;
  class?: RpgClass;
};
export type AddCharacterSkillDto = {
  characterId?: number;
  skillId?: number;
};
export type AttackResultDto = {
  attackerName?: string | null;
  opponentName?: string | null;
  attackerHP?: number;
  opponentHP?: number;
  damage?: number;
};
export type AttackResultDtoServiceResponse = {
  data?: AttackResultDto;
  success?: boolean;
  message?: string | null;
};
export type WeaponAttackDto = {
  attackerId?: number;
  opponentId?: number;
};
export type SkillAttackDto = {
  attackerId?: number;
  opponentId?: number;
  skillId?: number;
};
export type FightResultDto = {
  fightLog?: string[] | null;
};
export type FightResultDtoServiceResponse = {
  data?: FightResultDto;
  success?: boolean;
  message?: string | null;
};
export type FightRequestDto = {
  characterIds?: number[] | null;
};
export type HighscoreDto = {
  id?: number;
  name?: string | null;
  fights?: number;
  victories?: number;
  defeats?: number;
};
export type HighscoreDtoListServiceResponse = {
  data?: HighscoreDto[] | null;
  success?: boolean;
  message?: string | null;
};
export type AddWeaponDto = {
  name?: string | null;
  damage?: number;
  characterId?: number;
};
export const {
  usePostAuthRegisterMutation,
  usePostAuthLoginMutation,
  useGetApiCharacterGetAllQuery,
  useGetApiCharacterByIdQuery,
  useDeleteApiCharacterByIdMutation,
  usePostApiCharacterMutation,
  usePutApiCharacterMutation,
  usePostApiCharacterSkillMutation,
  usePostFightWeaponMutation,
  usePostFightSkillMutation,
  usePostFightMutation,
  useGetFightQuery,
  usePostWeaponMutation,
} = injectedRtkApi;
