/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  GaugeStats,
  MinterV2,
  MinterV2_Initialized,
  MinterV2_OwnershipTransferred,
  Vault,
  Vault_Approval,
  Vault_OwnershipTransferred,
  Vault_Transfer,
  VoterV5,
  VoterV5_Abstained,
  VoterV5_AddFactories,
  VoterV5_Attach,
  VoterV5_Blacklisted,
  VoterV5_BlacklistedPool,
  VoterV5_Detach,
  VoterV5_DistributeReward,
  VoterV5_FactoryDisabled,
  VoterV5_FactoryEnabled,
  VoterV5_FactoryReplaced,
  VoterV5_GaugeCreated,
  VoterV5_GaugeKilled,
  VoterV5_GaugeRevived,
  VoterV5_HitRefreshApprovalLimit,
  VoterV5_Initialized,
  VoterV5_NotifyReward,
  VoterV5_RefundReward,
  VoterV5_SetBribeFactory,
  VoterV5_SetBribeFor,
  VoterV5_SetDepositor,
  VoterV5_SetGaugeFactory,
  VoterV5_SetGaugeLogic,
  VoterV5_SetMinter,
  VoterV5_SetOptions,
  VoterV5_SetPairFactory,
  VoterV5_SetPermissionRegistry,
  VoterV5_SetVoteDelay,
  VoterV5_Voted,
  VoterV5_Whitelisted,
  VoterV5_WhitelistedPool,
  PMX,
  PMX_Approval,
  PMX_EIP712DomainChanged,
  PMX_OwnershipTransferStarted,
  PMX_OwnershipTransferred,
  PMX_Transfer,
  OPMX,
  OPMX_Approval,
  OPMX_Exercise,
  OPMX_ExerciseLp,
  OPMX_ExerciseVe,
  OPMX_PauseStateChanged,
  OPMX_RoleAdminChanged,
  OPMX_RoleGranted,
  OPMX_RoleRevoked,
  OPMX_SetDiscount,
  OPMX_SetFeeDistributor,
  OPMX_SetGauge,
  OPMX_SetLockDurationForMaxLpDiscount,
  OPMX_SetLockDurationForMinLpDiscount,
  OPMX_SetLockDurationForMinVeDiscount,
  OPMX_SetMaxLPDiscount,
  OPMX_SetMinLPDiscount,
  OPMX_SetPaymentConfiguration,
  OPMX_SetRouter,
  OPMX_SetTwapSeconds,
  OPMX_SetVeMaxDiscount,
  OPMX_SetVeMinDiscount,
  OPMX_ToggleExternalOption,
  OPMX_Transfer,
} from "generated";

MinterV2.Initialized.handler(async ({ event, context }) => {
  const entity: MinterV2_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.MinterV2_Initialized.set(entity);
});

MinterV2.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: MinterV2_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.MinterV2_OwnershipTransferred.set(entity);
});

Vault.Approval.handler(async ({ event, context }) => {
  const entity: Vault_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.Vault_Approval.set(entity);
});

Vault.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: Vault_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.Vault_OwnershipTransferred.set(entity);
});

Vault.Transfer.handler(async ({ event, context }) => {
  const entity: Vault_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.Vault_Transfer.set(entity);
});

VoterV5.Abstained.handler(async ({ event, context }) => {
  const entity: VoterV5_Abstained = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    voter: event.params.voter,
    weight: event.params.weight,
  };

  context.VoterV5_Abstained.set(entity);
});

VoterV5.AddFactories.handler(async ({ event, context }) => {
  const entity: VoterV5_AddFactories = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pairfactory: event.params.pairfactory,
    gaugefactory: event.params.gaugefactory,
  };

  context.VoterV5_AddFactories.set(entity);
});

VoterV5.Attach.handler(async ({ event, context }) => {
  const entity: VoterV5_Attach = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    gauge: event.params.gauge,
    tokenId: event.params.tokenId,
  };

  context.VoterV5_Attach.set(entity);
});

VoterV5.Blacklisted.handler(async ({ event, context }) => {
  const entity: VoterV5_Blacklisted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blacklister: event.params.blacklister,
    token: event.params.token,
  };

  context.VoterV5_Blacklisted.set(entity);
});

VoterV5.BlacklistedPool.handler(async ({ event, context }) => {
  const entity: VoterV5_BlacklistedPool = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blacklister: event.params.blacklister,
    pool: event.params.pool,
  };

  context.VoterV5_BlacklistedPool.set(entity);
});

VoterV5.Detach.handler(async ({ event, context }) => {
  const entity: VoterV5_Detach = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    gauge: event.params.gauge,
    tokenId: event.params.tokenId,
  };

  context.VoterV5_Detach.set(entity);
});

VoterV5.DistributeReward.handler(async ({ event, context }) => {
  const entity: VoterV5_DistributeReward = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    gauge: event.params.gauge,
    amount: event.params.amount,
  };

  context.VoterV5_DistributeReward.set(entity);

  const gaugeStats = await context.GaugeStats.get(event.params.gauge);

  if (gaugeStats) {
    context.GaugeStats.set({
      ...gaugeStats,
      totalRewardsDistributed: gaugeStats.totalRewardsDistributed + event.params.amount,
      lastUpdatedBlock: BigInt(event.block.number),
    });
  }
});

VoterV5.FactoryDisabled.handler(async ({ event, context }) => {
  const entity: VoterV5_FactoryDisabled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gaugeType: event.params.gaugeType,
    pairFactory: event.params.pairFactory,
    gaugeFactory: event.params.gaugeFactory,
  };

  context.VoterV5_FactoryDisabled.set(entity);
});

VoterV5.FactoryEnabled.handler(async ({ event, context }) => {
  const entity: VoterV5_FactoryEnabled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gaugeType: event.params.gaugeType,
    pairFactory: event.params.pairFactory,
    gaugeFactory: event.params.gaugeFactory,
  };

  context.VoterV5_FactoryEnabled.set(entity);
});

VoterV5.FactoryReplaced.handler(async ({ event, context }) => {
  const entity: VoterV5_FactoryReplaced = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gaugeType: event.params.gaugeType,
    oldPairFactory: event.params.oldPairFactory,
    oldGaugeFactory: event.params.oldGaugeFactory,
    newPairFactory: event.params.newPairFactory,
    newGaugeFactory: event.params.newGaugeFactory,
  };

  context.VoterV5_FactoryReplaced.set(entity);
});

VoterV5.GaugeCreated.handler(async ({ event, context }) => {
  const entity: VoterV5_GaugeCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gauge: event.params.gauge,
    creator: event.params.creator,
    internal_bribe: event.params.internal_bribe,
    external_bribe: event.params.external_bribe,
    pool: event.params.pool,
  };

  context.VoterV5_GaugeCreated.set(entity);

  const gaugeStats: GaugeStats = {
    id: event.params.gauge,
    pool: event.params.pool,
    creator: event.params.creator,
    isAlive: true,
    totalRewardsDistributed: BigInt(0),
    createdAtBlock: BigInt(event.block.number),
    lastUpdatedBlock: BigInt(event.block.number),
  };

  context.GaugeStats.set(gaugeStats);
});

VoterV5.GaugeKilled.handler(async ({ event, context }) => {
  const entity: VoterV5_GaugeKilled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gauge: event.params.gauge,
  };

  context.VoterV5_GaugeKilled.set(entity);

  const gaugeStats = await context.GaugeStats.get(event.params.gauge);

  if (gaugeStats) {
    context.GaugeStats.set({
      ...gaugeStats,
      isAlive: false,
      lastUpdatedBlock: BigInt(event.block.number),
    });
  }
});

VoterV5.GaugeRevived.handler(async ({ event, context }) => {
  const entity: VoterV5_GaugeRevived = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gauge: event.params.gauge,
  };

  context.VoterV5_GaugeRevived.set(entity);

  const gaugeStats = await context.GaugeStats.get(event.params.gauge);

  if (gaugeStats) {
    context.GaugeStats.set({
      ...gaugeStats,
      isAlive: true,
      lastUpdatedBlock: BigInt(event.block.number),
    });
  }
});

VoterV5.HitRefreshApprovalLimit.handler(async ({ event, context }) => {
  const entity: VoterV5_HitRefreshApprovalLimit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fromGaugeIndex: event.params.fromGaugeIndex,
    toGaugeIndex: event.params.toGaugeIndex,
  };

  context.VoterV5_HitRefreshApprovalLimit.set(entity);
});

VoterV5.Initialized.handler(async ({ event, context }) => {
  const entity: VoterV5_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.VoterV5_Initialized.set(entity);
});

VoterV5.NotifyReward.handler(async ({ event, context }) => {
  const entity: VoterV5_NotifyReward = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    reward: event.params.reward,
    amount: event.params.amount,
  };

  context.VoterV5_NotifyReward.set(entity);
});

VoterV5.RefundReward.handler(async ({ event, context }) => {
  const entity: VoterV5_RefundReward = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gauge: event.params.gauge,
    amount: event.params.amount,
  };

  context.VoterV5_RefundReward.set(entity);
});

VoterV5.SetBribeFactory.handler(async ({ event, context }) => {
  const entity: VoterV5_SetBribeFactory = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    old: event.params.old,
    latest: event.params.latest,
  };

  context.VoterV5_SetBribeFactory.set(entity);
});

VoterV5.SetBribeFor.handler(async ({ event, context }) => {
  const entity: VoterV5_SetBribeFor = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    isInternal: event.params.isInternal,
    old: event.params.old,
    latest: event.params.latest,
    gauge: event.params.gauge,
  };

  context.VoterV5_SetBribeFor.set(entity);
});

VoterV5.SetDepositor.handler(async ({ event, context }) => {
  const entity: VoterV5_SetDepositor = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    old: event.params.old,
    enabled: event.params.enabled,
  };

  context.VoterV5_SetDepositor.set(entity);
});

VoterV5.SetGaugeFactory.handler(async ({ event, context }) => {
  const entity: VoterV5_SetGaugeFactory = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    old: event.params.old,
    latest: event.params.latest,
  };

  context.VoterV5_SetGaugeFactory.set(entity);
});

VoterV5.SetGaugeLogic.handler(async ({ event, context }) => {
  const entity: VoterV5_SetGaugeLogic = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    old: event.params.old,
    latest: event.params.latest,
  };

  context.VoterV5_SetGaugeLogic.set(entity);
});

VoterV5.SetMinter.handler(async ({ event, context }) => {
  const entity: VoterV5_SetMinter = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    old: event.params.old,
    latest: event.params.latest,
  };

  context.VoterV5_SetMinter.set(entity);
});

VoterV5.SetOptions.handler(async ({ event, context }) => {
  const entity: VoterV5_SetOptions = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    old: event.params.old,
    latest: event.params.latest,
  };

  context.VoterV5_SetOptions.set(entity);
});

VoterV5.SetPairFactory.handler(async ({ event, context }) => {
  const entity: VoterV5_SetPairFactory = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    old: event.params.old,
    latest: event.params.latest,
  };

  context.VoterV5_SetPairFactory.set(entity);
});

VoterV5.SetPermissionRegistry.handler(async ({ event, context }) => {
  const entity: VoterV5_SetPermissionRegistry = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    old: event.params.old,
    latest: event.params.latest,
  };

  context.VoterV5_SetPermissionRegistry.set(entity);
});

VoterV5.SetVoteDelay.handler(async ({ event, context }) => {
  const entity: VoterV5_SetVoteDelay = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    old: event.params.old,
    latest: event.params.latest,
  };

  context.VoterV5_SetVoteDelay.set(entity);
});

VoterV5.Voted.handler(async ({ event, context }) => {
  const entity: VoterV5_Voted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    voter: event.params.voter,
    weight: event.params.weight,
  };

  context.VoterV5_Voted.set(entity);
});

VoterV5.Whitelisted.handler(async ({ event, context }) => {
  const entity: VoterV5_Whitelisted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    whitelister: event.params.whitelister,
    token: event.params.token,
  };

  context.VoterV5_Whitelisted.set(entity);
});

VoterV5.WhitelistedPool.handler(async ({ event, context }) => {
  const entity: VoterV5_WhitelistedPool = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    whitelister: event.params.whitelister,
    pool: event.params.pool,
  };

  context.VoterV5_WhitelistedPool.set(entity);
});

OPMX.Approval.handler(async ({ event, context }) => {
  const entity: OPMX_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.OPMX_Approval.set(entity);
});

OPMX.Exercise.handler(async ({ event, context }) => {
  const entity: OPMX_Exercise = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    recipient: event.params.recipient,
    amount: event.params.amount,
    paymentAmount: event.params.paymentAmount,
  };

  context.OPMX_Exercise.set(entity);
});

OPMX.ExerciseLp.handler(async ({ event, context }) => {
  const entity: OPMX_ExerciseLp = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    recipient: event.params.recipient,
    amount: event.params.amount,
    paymentAmount: event.params.paymentAmount,
    lpAmount: event.params.lpAmount,
  };

  context.OPMX_ExerciseLp.set(entity);
});

OPMX.ExerciseVe.handler(async ({ event, context }) => {
  const entity: OPMX_ExerciseVe = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    recipient: event.params.recipient,
    amount: event.params.amount,
    paymentAmount: event.params.paymentAmount,
    nftId: event.params.nftId,
  };

  context.OPMX_ExerciseVe.set(entity);
});

OPMX.PauseStateChanged.handler(async ({ event, context }) => {
  const entity: OPMX_PauseStateChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    isPaused: event.params.isPaused,
  };

  context.OPMX_PauseStateChanged.set(entity);
});

OPMX.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: OPMX_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.OPMX_RoleAdminChanged.set(entity);
});

OPMX.RoleGranted.handler(async ({ event, context }) => {
  const entity: OPMX_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.OPMX_RoleGranted.set(entity);
});

OPMX.RoleRevoked.handler(async ({ event, context }) => {
  const entity: OPMX_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.OPMX_RoleRevoked.set(entity);
});

OPMX.SetDiscount.handler(async ({ event, context }) => {
  const entity: OPMX_SetDiscount = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    discount: event.params.discount,
  };

  context.OPMX_SetDiscount.set(entity);
});

OPMX.SetFeeDistributor.handler(async ({ event, context }) => {
  const entity: OPMX_SetFeeDistributor = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newFeeDistributor: event.params.newFeeDistributor,
  };

  context.OPMX_SetFeeDistributor.set(entity);
});

OPMX.SetGauge.handler(async ({ event, context }) => {
  const entity: OPMX_SetGauge = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newGauge: event.params.newGauge,
  };

  context.OPMX_SetGauge.set(entity);
});

OPMX.SetLockDurationForMaxLpDiscount.handler(async ({ event, context }) => {
  const entity: OPMX_SetLockDurationForMaxLpDiscount = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lockDurationForMaxLpDiscount: event.params.lockDurationForMaxLpDiscount,
  };

  context.OPMX_SetLockDurationForMaxLpDiscount.set(entity);
});

OPMX.SetLockDurationForMinLpDiscount.handler(async ({ event, context }) => {
  const entity: OPMX_SetLockDurationForMinLpDiscount = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lockDurationForMinLpDiscount: event.params.lockDurationForMinLpDiscount,
  };

  context.OPMX_SetLockDurationForMinLpDiscount.set(entity);
});

OPMX.SetLockDurationForMinVeDiscount.handler(async ({ event, context }) => {
  const entity: OPMX_SetLockDurationForMinVeDiscount = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lockDurationForMinVeDiscount: event.params.lockDurationForMinVeDiscount,
  };

  context.OPMX_SetLockDurationForMinVeDiscount.set(entity);
});

OPMX.SetMaxLPDiscount.handler(async ({ event, context }) => {
  const entity: OPMX_SetMaxLPDiscount = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lpMaxDiscount: event.params.lpMaxDiscount,
  };

  context.OPMX_SetMaxLPDiscount.set(entity);
});

OPMX.SetMinLPDiscount.handler(async ({ event, context }) => {
  const entity: OPMX_SetMinLPDiscount = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lpMinDiscount: event.params.lpMinDiscount,
  };

  context.OPMX_SetMinLPDiscount.set(entity);
});

OPMX.SetPaymentConfiguration.handler(async ({ event, context }) => {
  const entity: OPMX_SetPaymentConfiguration = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pair: event.params.pair,
    twapOracle: event.params.twapOracle,
    paymentToken: event.params.paymentToken,
  };

  context.OPMX_SetPaymentConfiguration.set(entity);
});

OPMX.SetRouter.handler(async ({ event, context }) => {
  const entity: OPMX_SetRouter = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    router: event.params.router,
  };

  context.OPMX_SetRouter.set(entity);
});

OPMX.SetTwapSeconds.handler(async ({ event, context }) => {
  const entity: OPMX_SetTwapSeconds = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    twapSeconds: event.params.twapSeconds,
  };

  context.OPMX_SetTwapSeconds.set(entity);
});

OPMX.SetVeMaxDiscount.handler(async ({ event, context }) => {
  const entity: OPMX_SetVeMaxDiscount = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    veMaxDiscount: event.params.veMaxDiscount,
  };

  context.OPMX_SetVeMaxDiscount.set(entity);
});

OPMX.SetVeMinDiscount.handler(async ({ event, context }) => {
  const entity: OPMX_SetVeMinDiscount = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    veMinDiscount: event.params.veMinDiscount,
  };

  context.OPMX_SetVeMinDiscount.set(entity);
});

OPMX.ToggleExternalOption.handler(async ({ event, context }) => {
  const entity: OPMX_ToggleExternalOption = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    option: event.params.option,
    enabled: event.params.enabled,
  };

  context.OPMX_ToggleExternalOption.set(entity);
});

OPMX.Transfer.handler(async ({ event, context }) => {
  const entity: OPMX_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.OPMX_Transfer.set(entity);
});

PMX.Approval.handler(async ({ event, context }) => {
  const entity: PMX_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.PMX_Approval.set(entity);
});

PMX.EIP712DomainChanged.handler(async ({ event, context }) => {
  const entity: PMX_EIP712DomainChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.PMX_EIP712DomainChanged.set(entity);
});

PMX.OwnershipTransferStarted.handler(async ({ event, context }) => {
  const entity: PMX_OwnershipTransferStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.PMX_OwnershipTransferStarted.set(entity);
});

PMX.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: PMX_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.PMX_OwnershipTransferred.set(entity);
});

PMX.Transfer.handler(async ({ event, context }) => {
  const entity: PMX_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.PMX_Transfer.set(entity);
});
