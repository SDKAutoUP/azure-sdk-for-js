/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  discriminators,
  A2AEventDetails,
  A2APolicyDetails,
  A2AProtectedDiskDetails,
  A2AProtectedManagedDiskDetails,
  A2AProtectionContainerMappingDetails,
  A2ARecoveryPointDetails,
  A2AReplicationDetails,
  A2AUnprotectedDiskDetails,
  AgentDetails,
  AgentDiskDetails,
  Alert,
  AlertProperties,
  AsrJobDetails,
  ASRTask,
  AutomationRunbookTaskDetails,
  AzureFabricSpecificDetails,
  AzureToAzureNetworkMappingSettings,
  AzureToAzureVmSyncedConfigDetails,
  AzureVmDiskDetails,
  BaseResource,
  CloudError,
  ConfigurationSettings,
  ConsistencyCheckTaskDetails,
  CreateRecoveryPlanInput,
  CreateRecoveryPlanInputProperties,
  CurrentJobDetails,
  CurrentScenarioDetails,
  DataStore,
  DiskDetails,
  DiskVolumeDetails,
  DraDetails,
  EncryptionDetails,
  Event,
  EventProperties,
  EventProviderSpecificDetails,
  EventSpecificDetails,
  ExportJobDetails,
  Fabric,
  FabricProperties,
  FabricReplicationGroupTaskDetails,
  FabricSpecificDetails,
  FailoverJobDetails,
  FailoverReplicationProtectedItemDetails,
  GroupTaskDetails,
  HealthError,
  HealthErrorSummary,
  HyperVReplica2012EventDetails,
  HyperVReplica2012R2EventDetails,
  HyperVReplicaAzureEventDetails,
  HyperVReplicaAzurePolicyDetails,
  HyperVReplicaAzureReplicationDetails,
  HyperVReplicaBaseEventDetails,
  HyperVReplicaBasePolicyDetails,
  HyperVReplicaBaseReplicationDetails,
  HyperVReplicaBluePolicyDetails,
  HyperVReplicaBlueReplicationDetails,
  HyperVReplicaPolicyDetails,
  HyperVReplicaReplicationDetails,
  HyperVSiteDetails,
  HyperVVirtualMachineDetails,
  IdentityProviderDetails,
  InconsistentVmDetails,
  InitialReplicationDetails,
  InlineWorkflowTaskDetails,
  InMageAgentDetails,
  InMageAzureV2EventDetails,
  InMageAzureV2ManagedDiskDetails,
  InMageAzureV2PolicyDetails,
  InMageAzureV2ProtectedDiskDetails,
  InMageAzureV2RecoveryPointDetails,
  InMageAzureV2ReplicationDetails,
  InMageBasePolicyDetails,
  InMageDiskDetails,
  InMagePolicyDetails,
  InMageProtectedDiskDetails,
  InMageRcmAgentUpgradeBlockingErrorDetails,
  InMageRcmEventDetails,
  InMageRcmFabricSpecificDetails,
  InMageRcmLastAgentUpgradeErrorDetails,
  InMageRcmMobilityAgentDetails,
  InMageRcmNicDetails,
  InMageRcmPolicyDetails,
  InMageRcmProtectedDiskDetails,
  InMageRcmRecoveryPointDetails,
  InMageRcmReplicationDetails,
  InMageReplicationDetails,
  InnerHealthError,
  InputEndpoint,
  IPConfig,
  Job,
  JobDetails,
  JobEntity,
  JobErrorDetails,
  JobProperties,
  JobStatusEventDetails,
  JobTaskDetails,
  LogicalNetwork,
  LogicalNetworkProperties,
  ManualActionTaskDetails,
  MasterTargetServer,
  MigrationItem,
  MigrationItemProperties,
  MigrationProviderSpecificSettings,
  MigrationRecoveryPoint,
  MigrationRecoveryPointProperties,
  MobilityServiceUpdate,
  Network,
  NetworkMapping,
  NetworkMappingFabricSpecificSettings,
  NetworkMappingProperties,
  NetworkProperties,
  OSDetails,
  OSDiskDetails,
  OSVersionWrapper,
  Policy,
  PolicyProperties,
  PolicyProviderSpecificDetails,
  ProcessServer,
  ProcessServerDetails,
  ProtectableItem,
  ProtectableItemProperties,
  ProtectionContainer,
  ProtectionContainerFabricSpecificDetails,
  ProtectionContainerMapping,
  ProtectionContainerMappingProperties,
  ProtectionContainerMappingProviderSpecificDetails,
  ProtectionContainerProperties,
  ProviderError,
  ProviderSpecificRecoveryPointDetails,
  PushInstallerDetails,
  RcmAzureMigrationPolicyDetails,
  RcmProxyDetails,
  RecoveryPlan,
  RecoveryPlanA2ADetails,
  RecoveryPlanA2AFailoverInput,
  RecoveryPlanA2AInput,
  RecoveryPlanAction,
  RecoveryPlanActionDetails,
  RecoveryPlanAutomationRunbookActionDetails,
  RecoveryPlanCollection,
  RecoveryPlanGroup,
  RecoveryPlanGroupTaskDetails,
  RecoveryPlanHyperVReplicaAzureFailbackInput,
  RecoveryPlanHyperVReplicaAzureFailoverInput,
  RecoveryPlanInMageAzureV2FailoverInput,
  RecoveryPlanInMageFailoverInput,
  RecoveryPlanInMageRcmFailoverInput,
  RecoveryPlanManualActionDetails,
  RecoveryPlanPlannedFailoverInput,
  RecoveryPlanPlannedFailoverInputProperties,
  RecoveryPlanProperties,
  RecoveryPlanProtectedItem,
  RecoveryPlanProviderSpecificDetails,
  RecoveryPlanProviderSpecificFailoverInput,
  RecoveryPlanProviderSpecificInput,
  RecoveryPlanScriptActionDetails,
  RecoveryPlanShutdownGroupTaskDetails,
  RecoveryPlanTestFailoverCleanupInput,
  RecoveryPlanTestFailoverCleanupInputProperties,
  RecoveryPlanTestFailoverInput,
  RecoveryPlanTestFailoverInputProperties,
  RecoveryPlanUnplannedFailoverInput,
  RecoveryPlanUnplannedFailoverInputProperties,
  RecoveryPoint,
  RecoveryPointProperties,
  RecoveryServicesProvider,
  RecoveryServicesProviderProperties,
  ReplicationAgentDetails,
  ReplicationGroupDetails,
  ReplicationProtectedItem,
  ReplicationProtectedItemProperties,
  ReplicationProviderSpecificSettings,
  ReprotectAgentDetails,
  Resource,
  ResourceHealthSummary,
  RetentionVolume,
  RunAsAccount,
  ScriptActionTaskDetails,
  ServiceError,
  StorageClassification,
  StorageClassificationMapping,
  StorageClassificationMappingProperties,
  StorageClassificationProperties,
  Subnet,
  SupportedOperatingSystems,
  SupportedOSDetails,
  SupportedOSProperties,
  SupportedOSProperty,
  SwitchProtectionJobDetails,
  TaskTypeDetails,
  TestFailoverJobDetails,
  UpdateRecoveryPlanInput,
  UpdateRecoveryPlanInputProperties,
  VaultHealthDetails,
  VaultHealthProperties,
  VaultSetting,
  VaultSettingProperties,
  VCenter,
  VCenterProperties,
  VersionDetails,
  VirtualMachineTaskDetails,
  VmmDetails,
  VmmToAzureNetworkMappingSettings,
  VmmToVmmNetworkMappingSettings,
  VmmVirtualMachineDetails,
  VMNicDetails,
  VmNicUpdatesTaskDetails,
  VMwareCbtMigrationDetails,
  VMwareCbtNicDetails,
  VmwareCbtPolicyDetails,
  VMwareCbtProtectedDiskDetails,
  VMwareCbtProtectionContainerMappingDetails,
  VMwareDetails,
  VMwareV2FabricSpecificDetails,
  VMwareVirtualMachineDetails
} from "../models/mappers";
